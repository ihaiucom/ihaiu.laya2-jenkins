import groovy.xml.MarkupBuilder 
def xml = new MarkupBuilder() 
println xml

// ע�Ϳ����ǵ��е�

/*
ע��Ҳ�����Ƕ��е�
1
2
*/

println 123

for (element in xml) 
{
    println element
}
