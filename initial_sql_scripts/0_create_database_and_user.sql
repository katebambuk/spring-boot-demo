create database if not exists db_chat;

create user chat_user@localhost identified by '123456';
grant all privileges on db_chat.* to chat_user@localhostflush;

flush privileges;


