create table db_chat.message (
    id int auto_increment not null,
    text varchar(1000),
    send_date timestamp not null default current_timestamp,
    user_login varchar(50) not null,
    chat_id int not null,

    primary key (id)
);

alter table db_chat.message
    add constraint fk_message_user foreign key (user_login)
    references db_chat.user(login) on delete cascade;

alter table db_chat.message
    add constraint fk_message_chat foreign key (chat_id)
    references db_chat.chat(id) on delete cascade;