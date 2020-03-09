class Example { 
   static void main(String[] args) {
      new File("./").eachFileRecurse() {
         file -> println file.getAbsolutePath()
      }
   }
} 