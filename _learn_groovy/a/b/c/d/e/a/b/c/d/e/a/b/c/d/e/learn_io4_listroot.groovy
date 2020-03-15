class Example { 
   static void main(String[] args) { 
      def rootFiles = new File("D:/zengfeng/githubs/ihaiu.laya2-jenkins/_learn_groovy").listRoots() 
      rootFiles.each { 
         file -> println file.absolutePath 
      }
   }
}
