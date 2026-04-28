/******************************************
	학적과 수강신청 실습 데이터베이스
******************************************/
-- 데이터베이스 생성
create database if not exists `enroll2026`;
show databases;
use enroll2026;
select database();

-- 강사 테이블 생성
create table instructor(
	instuctor_no int primary key,
    instructor_name varchar(4),
    age int,
    gender char(1)
);
select * from information_schema.table_constraints
	where table_name = 'instructor'; 
desc instructor;
alter table instructor
	rename column instuctor_no to instructor_no;

-- 과목 테이블 생성
create table subject1 (
	sub_no int primary key,
    sub_name varchar(4),
    class_room varchar(3),
    instructor_no int
);
alter table subject1
	add constraint fk_subject1_instructor_no foreign key(instructor_no)
    references instructor(instructor_no);
    
show create table subject1;
alter table subject1 drop foreign key fk_instructor_no;

rename table sunjects to subjects;
    
select * from subjects;
desc subjects;

-- 시간표 테이블 생성
create table class_time (
	time_id int primary key,
    sub_no int,
    class_time varchar(1)
);
alter table class_time
	add constraint fk_class_time_sub_no foreign key(sub_no)
    references subject1(sub_no);

-- 학적 정보 테이블 생성
create table enrollment(
	std_id int,
    sub_no int,
    grade char(1)
);
alter table enrollment
	add constraint fk_enrollment_sub_no foreign key(sub_no)
    references subject1(sub_no);
alter table enrollment
	add constraint fk_enrollment_std_id foreign key(std_id)
    references student(std_id);

-- 학생정보 테이블 생성
create table student(
	std_id int,
    std_name int,
    address varchar(13)
	);
alter table student add primary key(std_id);















