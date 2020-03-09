class Example {
   static void main(String[] args) {
      def src = new File("./Example.txt")
      def dst = new File("./abc/Example1.txt")
      dst << src.text
   } 
}