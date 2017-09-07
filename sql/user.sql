drop table if exists `user`;
create table `user` ( 
    `name` varchar(255) default null, 
    `num` varchar(255) default null, 
    `phone` varchar(255) default null, 
    `ext` varchar(255) default null, 
    `wand` varchar(255) default null,
    `id` int(255) not null auto_increment, 
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
    `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (`id`)
    )engine=InnoDB default charset=utf8;
