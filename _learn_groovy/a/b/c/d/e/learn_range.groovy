def printRang(r)
{
    println r + "=========="
    for(int i = 0, len=r.size(); i < len; i ++)
    {
        println i + "   " + r.get(i)
    }

}
def rang1 = 1..10

printRang rang1
println "-------"
println rang1.getFrom();
println rang1.getTo();
println rang1.isReverse();

println "--------"

printRang 1..<10
printRang 'b'..'g'

printRang 10..1
printRang 10..<1
printRang 'z'..'f'
