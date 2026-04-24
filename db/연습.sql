use hrdb2019;
-- [서브쿼리 : 단일행]
-- 가장 길게(duration) 휴가를 사용한 사원이 속한 부서의 모든 사원들을 조회
-- 1) 모든 사원들 
select * from employee;
-- 2) 휴가를 사용한 사원들이 속한 부서
select e.dept_id
	from employee e, vacation v
    where e.emp_id = v.emp_id;
-- 3) 휴가를 가장 길게 사용한 사원
select emp_id from vacation order by duration desc limit 1;

-- 4) 다 결합
select * from employee
where dept_id = (
select e.dept_id
	from employee e, vacation v 
	where e.emp_id = v.emp_id
		and e.emp_id = (select emp_id from vacation order by duration desc limit 1));
        
        
-- '제3본부'에 속한 모든 사원의 휴가 사용 정보 조회
-- in을 써서 필요한 정보만 빼오기
select * from vacation
	where emp_id 
    in (select emp_id from employee
     where dept_id 
     in (select dept_id from department
      where unit_id 
		= (select unit_id from unit 
			where unit_name = '제3본부')));
            
-- 휴가를 한번이라도 사용한 모든 사원 조회
select * from employee;
select 1 -- 1은 true
	from vacation v, employee e
    where v.emp_id = e.emp_id;
select * from employee e
	where exists (
		select 1 
			from vacation v
			where v.emp_id = e.emp_id);


			

	
    







