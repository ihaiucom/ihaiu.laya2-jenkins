
// def say(str)
// {
//     println "say:" + str
// }

// void saay(str)
// {
//     println "saay:" + str
// }

// say("abc")
// saay("abc")

class Example {
   static def DisplayName() {
      println("This is how methods work in groovy");
      println("This is an example of a simple method");
   } 
	
   static void main(String[] args) {
      DisplayName();
      Example1.sum(10,5);
      Example2.sum(1);
      println(Example3.sum(6));
   } 
}

class Example1 {
   static void sum(int a,int b) {
      int c = a+b;
      println(c);
   }  
	
//    static void main(String[] args) {
//       sum(10,5);
//    } 
}

class Example2 { 
   static void sum(int a,int b = 5) { 
      int c = a+b; 
      println(c); 
   } 
	
//    static void main(String[] args) {
//       sum(6); 
//    } 
}

class Example3 {
   static int sum(int a,int b = 5) {
      int c = a+b;
      return c;
   } 
	
//    static void main(String[] args) {
//       println(sum(6));
//    } 
}
