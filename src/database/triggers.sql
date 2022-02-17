CREATE OR REPLACE FUNCTION func_create_user() RETURNS trigger AS $func_create_user$
    BEGIN
        insert into public.users (name, id, email, age, description) values ('fdp', NEW.id, NEW.email, 12, 'un bon gros fdp.');
        RETURN NEW;
    END;
$func_create_user$ LANGUAGE plpgsql security definer;

DROP trigger if exists trigger_create_user on auth.users;
CREATE TRIGGER trigger_create_user after insert on auth.users
    FOR EACH ROW EXECUTE PROCEDURE func_create_user();


CREATE OR REPLACE FUNCTION func_match_notification() RETURNS trigger AS $func_match_notification$
    BEGIN
        update public.users
        set "matchNotification" = "matchNotification" + 1
        where id = NEW."userA";

        update public.users
        set "matchNotification" = "matchNotification" + 1
        where id = NEW."userB";
        
        RETURN NULL;
    END;
$func_match_notification$ LANGUAGE plpgsql security definer;

DROP trigger if exists trigger_match_notification on public.match;
CREATE TRIGGER trigger_match_notification after insert on public.match
    FOR EACH ROW EXECUTE PROCEDURE func_match_notification();
