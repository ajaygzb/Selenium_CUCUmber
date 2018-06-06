package com.db.connect;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
 
public class TestDatabase {
 
 
 
 //@Test
 public void TestVerifyDB(){
	 System.out.println("******     Result is-----    "+ExecuteQuery( "select * from employeeinfo LIMIT 1",1));
	// select * from employeeinfo LIMIT 1
 }
 
 
 
 
 
 
 public String ExecuteQuery(String Query,int index){
	 
	 String result = null;
	 
	 try {
                        
       // This will load the driver
     Class.forName("com.mysql.cj.jdbc.Driver");
     System.out.println("Driver Loaded");  
    // This will connect with Database , getConnection taking three argument
       Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/employeeportal","root","root");            
 
       System.out.println("Connection created");
 
   // This will create statement  
        Statement smt=con.createStatement();
          
        System.out.println("Statement created");
 
   // Now execute the query, here facebook is the table which I have created in DB 
    
        ResultSet rs=  smt.executeQuery(Query);
 
        System.out.println("Query Executed"+Query);
 
  // Iterate the resultset now
 
       while(rs.next()){
   
      /* String name=      rs.getString("name");
       String id=        rs.getString("id");
       String dept=      rs.getString("dept");
 
        System.out.println("Name is "+name+" ID is "+id+" Dept is "+dept);*/
    	   System.out.println("Row Count:    "+rs.getRow());
    	   int colCount= rs.getMetaData().getColumnCount();
    	   System.out.println("Coloumn Count:    "+colCount);
    	   
    	    
    	  // System.out.println(rs .getString(1) + "  " + rs.getString(2) + "  " + rs.getString(3) + "  "
    		//		+ rs.getString(4));
    	    result = rs .getString(index);
   
  }
}       //return result;
        catch (Exception e) {
         System.out.println(e.getMessage());
  }
	
	return result;
	 
}
 
 
}