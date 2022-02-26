CREATE OR REPLACE FUNCTION f_getMatch(userId varchar) RETURNS table(a uuid, b uuid) AS
        $BODY$
                select "userA", "userB" from match
                where "userA" = cast(userId as uuid) or "userB" = cast(userId as uuid);
        $BODY$
LANGUAGE sql security definer;

CREATE OR REPLACE FUNCTION f_getMessages(userId varchar, matchId varchar) 
RETURNS table(id uuid, origin uuid, destination uuid, message text, created_at timestamptz) 
AS
        $BODY$
                select "id", "origin", "destination", "message", "created_at" from interaction
                where (("origin" = cast(userId as uuid) and "destination" = cast(matchId as uuid))
                        or
                        ("origin" = cast(matchId as uuid) and "destination" = cast(userId as uuid))
                )
                order by "created_at" asc;
        $BODY$
LANGUAGE sql security definer;

CREATE OR REPLACE FUNCTION f_getLastMessage(userId varchar, matchId varchar)
RETURNS table(id uuid, origin uuid, destination uuid, message text, created_at timestamptz) 
AS
        $BODY$
                select "id", "origin", "destination", "message", "created_at" from interaction
                where (("origin" = cast(userId as uuid) and "destination" = cast(matchId as uuid))
                        or
                        ("origin" = cast(matchId as uuid) and "destination" = cast(userId as uuid))
                )
                order by "created_at" desc limit 1;
        $BODY$
LANGUAGE sql security definer;

CREATE OR REPLACE FUNCTION f_getMatchNotSelf(userId varchar) RETURNS table(id uuid) AS
        $BODY$
                select "a" from f_getmatch(userId) where "a" != cast(userId as uuid)
                union
                (select "b" from f_getmatch(userId) where "b" != cast(userId as uuid)) as b;
        $BODY$
LANGUAGE sql security definer;

CREATE OR REPLACE FUNCTION f_getMatchInfo(selfId varchar) RETURNS table(id uuid, name text, description text, photo text) 
AS
        $BODY$
                select public.users.id, "name", "description", "path" from public.users
                join photos on public.users.id = photos.user
                where public.users.id in (select * from f_getmatchnotself(selfId));
        $BODY$
LANGUAGE sql security definer;

