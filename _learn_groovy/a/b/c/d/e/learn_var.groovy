class Test
{
    static void main(String[] args)
    {
        println args

        String name = "zf"
        println name

        name = 123
        println name

        // ·¶Î§ÔËËã·û ..
        def nums = 1..10;

        println(nums);
        println nums.get(1)
        println nums.get(2)
        println nums.size()

        println "while============"
        int i = 0;
        while(i < nums.size())
        {
            println i+"     "+nums.get(i)
            i ++
        }

        println "for============"
        for(int j = 0, len = nums.size(); j < len; j ++)
        {
            println j+"     "+nums.get(j)
        }

        println "for in============"
        for (element in nums) {
            println element
        }

        String str = "zengfeng"
        println "str.length=" + str.length()
        for(int c = 0; c < str.length(); c ++)
        {
            println c + "       " + str.getAt(c)
        }

        Float aaa = 123.4
        println aaa.power(2)

        println aaa.mod(10)
        println aaa.round()
        // println aaa.floor()
        
    }
}
