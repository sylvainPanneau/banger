CREATE OR REPLACE FUNCTION f_getMatch(userId varchar) RETURNS table(a uuid, b uuid) AS
        $BODY$
                select "userA", "userB" from match
                where "userA" = cast(userId as uuid) or "userB" = cast(userId as uuid);
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

