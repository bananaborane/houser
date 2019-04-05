create table houses (
    house_id serial primary key,
    house_name varchar(50),
    address varchar(80),
    city varchar(50),
    state varchar(2),
    zip_code int
)