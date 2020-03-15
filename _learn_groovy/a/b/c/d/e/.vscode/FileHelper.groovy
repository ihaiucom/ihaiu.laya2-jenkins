
/** 
* 复制文件 
* @param srcDir 源文件地址 
* @param fgtDir 目标文件地址 
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
* 判断是否是需要传递的文件，以timestamp为标准，在该日期之后的返回TRUE，其他为FALSE 
* @param fileTime 当前要判断的日期 
* @param params Params类型参数 
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
