/**
	테이블 조인 : 기본 SQL 방식, ANSI SQL
*/
use myshop2019;
select database();

-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
-- 사원명, 주문일시, 전체금액을 조회하세요.
select 

    
    
    
    
    
    
    









select oh.order_id,
	   c.customer_name,
       e.employee_name,
       oh.order_date,
       format(oh.total_due, 0) as total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
		and oh.employee_id = e.employee_id
        and oh.total_due >= 8500000;
-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
select od.order_id,
	   p.product_id,
       p.product_name,
       od.order_qty,
       od.unit_price,
       od. line_total,
       c.customer_name
	from order_detail od, product p, order_header oh, customer c
    where od.product_id = p.product_id
        and oh.order_id = od.order_id
        and oh.customer_id = c.customer_id
		and order_qty >= 30;


-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.