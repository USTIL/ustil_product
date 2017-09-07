drop table if exists `admin`;
create table `admin` ( 
    `admin` varchar(255) default null, 
    `id` int(255) not null auto_increment, 
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
    `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (`id`)
    )engine=InnoDB default charset=utf8;
