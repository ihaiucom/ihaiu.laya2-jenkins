import java.io.File 
class Example { 
   static void main(String[] args) { 
       println args
       String filePath = args.size() > 0 ? args[0] : "./abc"
       println "filePath=" + filePath

      def file = new File(filePath) 
      println "absolutePath? ${file.absolutePath}}" 
      println "File? ${file.isFile()}" 
      println "Directory? ${file.isDirectory()}" 
    //   file.mkdir()
    file.delete()
   } 
}