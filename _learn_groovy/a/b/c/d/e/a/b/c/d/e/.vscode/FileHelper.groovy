
/** 
* �����ļ� 
* @param srcDir Դ�ļ���ַ 
* @param fgtDir Ŀ���ļ���ַ 
* @return 
*/ 
def copyFiles(srcDir, fgtDir) 
{ 
    // if srcFiles not exit, return 
    def srcFiles = new File(srcDir) 

    if (!srcFiles.exists()) 
    { 
        return 
    } 

    srcFiles.eachFile 
    { 
        file -> 
            // if (file.isFile() && isNewFile(file.lastModified())) 
            if (file.isFile()) 
            { 
                // if fgtDir not exit, create one 
                (
                    new File(fgtDir)).mkdirs() 
                    new File(fgtDir + File.separator + file.name
                ).withWriter 
                { 
                    writer ->  file.eachLine 
                    { 
                        line -> writer.writeLine(line) 
                    } 
                } 
                println 'copy ' + file.getCanonicalPath() 
            } 
            else if (file.isDirectory()) 
            { 
                copyFiles(srcDir + File.separator + file.name, fgtDir + File.separator + file.name) 
            } 
    } 
} 


/** 
* �ж��Ƿ�����Ҫ���ݵ��ļ�����timestampΪ��׼���ڸ�����֮��ķ���TRUE������ΪFALSE 
* @param fileTime ��ǰҪ�жϵ����� 
* @param params Params���Ͳ��� 
* @return 
*/ 
def boolean isNewFile(fileTime, params) 
{ 
    Date date = params.timestamp 
    Date dateFile = new Date(fileTime) 
    def result 

    if (date.compareTo(dateFile) >= 0) 
    { 
        result = false 
    } 
    else if(date.compareTo(dateFile) < 0)  
    { 
        result = true 
    } 

    return result 
} 


def deleteFiles(filePath)
{

    def file = new File(filePath) 

    if (!file.exists()) 
    { 
        return 
    } 

    println 'delete ' + file.getCanonicalPath() 
    if (file.isFile()) 
    { 
        file.delete()
    }
    else if (file.isDirectory()) 
    {
        file.deleteDir()
    }
    
}


String srcDir = "./";
String fgtDir = "./a/b/c/d//e";
copyFiles(srcDir, fgtDir);

// deleteFiles("./a");
