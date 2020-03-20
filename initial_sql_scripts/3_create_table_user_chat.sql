create table db_chat.user_chat (
    user_login varchar(50) not null,
    chat_id int not null,

    primary key (user_login, chat_id)
);

alter table db_chat.user_chat
    add constraint fk_user_chat_chat foreign key (chat_id)
    references db_chat.chat(id) on delete cascade;

alter table db_chat.user_chat
    add constraint fk_fk_user_chat_user foreign key (user_login)
    references db_chat.user(login) on delete cascade;