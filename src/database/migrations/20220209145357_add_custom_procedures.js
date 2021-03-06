const  CUSTOM_FUNCTION = `
    CREATE OR REPLACE FUNCTION on_update_timestamp()
    RETURNS trigger AS $$
    BEGIN
        NEW.updated_at = now();
        RETURN NEW;
    END;
    $$ language 'plpgsql';
`

const DROP_CUSTOM_FUNCTION=`
    DROP FUNCTION on_update_timestamp()
`
exports.up = async function(knex){
    return knex.raw(CUSTOM_FUNCTION)
}
exports.down = async function(knex){
    return knex.raw(DROP_CUSTOM_FUNCTION)
}