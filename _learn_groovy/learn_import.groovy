import groovy.xml.MarkupBuilder 
def xml = new MarkupBuilder() 
println xml

// 注释可以是单行的

/*
注释也可以是多行的
1
2
*/

println 123

for (element in xml) 
{
    println element
}