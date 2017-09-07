drop table if exists `people`;
create table `people` ( 
    `name` varchar(255) default null, 
    `phone` varchar(255) default null, 
    `home` varchar(255) default null, 
    `grade` varchar(255) default null, 
    `lang` varchar(255) default null, 
    `job` varchar(255) default null, 
    `class` varchar(255) default null, 
    `github` varchar(255) default null, 
    `id` int(255) not null auto_increment, 
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
    `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (`id`)
    )engine=InnoDB default charset=utf8;