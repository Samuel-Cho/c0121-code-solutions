select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "Total Spent"
  from "customers"
  join "payments" using ("customerId")
 group by "customers"."customerId"
 order by sum("payments"."amount") desc;
