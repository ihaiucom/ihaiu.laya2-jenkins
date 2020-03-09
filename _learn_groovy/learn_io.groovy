import java.io.File 
class Example { 
   static void main(String[] args) { 
       println args
       String filePath = args.size() > 0 ? args[0] : "Example.txt"
       println "filePath=" + filePath

      // new File(filePath).eachLine {  
      //    line -> println "line : $line"; 
      // } 

      println "========="
      File file = new File(filePath)
      println "The file ${file.absolutePath} has ${file.length()} bytes"
      // file.eachLine {  
      //    line -> println "line : $line"; 
      // } 
      println file.text

      file.withWriter('utf-8') { 
         writer -> writer.writeLine 'Hello World abc' 
      }  
      println "The file ${file.absolutePath} has ${file.length()} bytes"

   } 
}