CREATE OR REPLACE FUNCTION func_create_user() RETURNS trigger AS $func_create_user$
    BEGIN
        insert into public.users (name, id, email, age, description) values ('fdp', NEW.id, NEW.email, 12, 'un bon gros fdp.');
        RETURN NEW;
    END;
$func_create_user$ LANGUAGE plpgsql security definer;

DROP trigger if exists trigger_create_user on auth.users;
CREATE TRIGGER trigger_create_user after insert on auth.users
    FOR EACH ROW EXECUTE PROCEDURE func_create_user();
