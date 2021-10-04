create database news;


create table categories (
    category_id serial primary key,
    name varchar(32) not null
);

create table posts (
    post_id serial primary key,
    title varchar(256) not null,
    content text,
    category_id int references categories(category_id),
    created_at timestamp with time zone default current_timestamp
);
