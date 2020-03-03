#!groovy

// 引用库
@Library("learn_jenkins_share_lib") _

// 创建库里的类
def tools = new ihaiu.develops.tools()

String workspace="D:/Jenkins/GameJJSG/"
pipeline 
{
   agent 
   {
       node 
       {
            label "master"						// 设置运行机器节点标签
            customWorkspace "${workspace}" 		// 自定义在工作空间 
       }
   }

   options 
   {
   		timestamps()  							// 日志会有时间
	  	timeout(time: 20, unit: 'SECONDS') 		// 设置超时时间
	  	retry(2)								// 设置重复次数
	  	disableConcurrentBuilds()				// 不允许并发构建
	  	//skipDefaultCheckout true				// 删除隐试checkou scm语句
	}


   stages 
   {
      stage('步骤一:拉取GIT') 
      {
         steps 
         {
         	echo "开始拉取GIT"
            git credentialsId: '647b7b11-5185-4289-843d-77cc8dfbc945', url: 'git@github.com:ihaiucom/ihaiu.laya2-jenkins.git'
         }
      }

      stage('步骤二：Say Hello') 
      {
         steps 
         {
            echo 'Begin Say'
         	timeout(time: 3, unit: 'SECONDS')  // 设置超时时间
         	{
            	echo 'Hello World'
			}
         }
      }

      stage('步骤三：调用库') 
      {
         steps 
         {
         	script
         	{
         		println("第三步开始")
         		tools.PrintMe("通过共享库调用的方法")
         	}
         }
      }
   }

   post 
   {
	  always 
	  {
	  	script
	  	{

	  		currentBuild.description = "always"
	    	echo "always 无论流水线或阶段的完成状态如何，都允许在 post 部分运行该步骤。"
	  	}
	  }

	  unstable 
	  {
	  	echo "unstable 只有当前流水线或阶段的完成状态为unstable，才允许在 post 部分运行该步骤, 通常由于测试失败,代码违规等造成。通常web UI是黄色。"
	  }

	  notBuilt 
	  {
	    echo "notBuilt"
	  }

	  cleanup 
	  {
	    echo "cleanup"
	  }

	  regression 
	  {
	    echo "regression"
	  }

	  aborted 
	  {
	  		script
	  		{
	  			currentBuild.description = "aborted"
	    		echo "aborted 只有当前流水线或阶段的完成状态为aborted，才允许在 post 部分运行该步骤, 通常由于流水线被手动的aborted。通常web UI是灰色"
	  		}
	  }

	  success 
	  {
	  	script
	  	{

	  		currentBuild.description = "构建成功"
	    	echo "success 只有当前流水线或阶段的完成状态为success，才允许在 post 部分运行该步骤, 通常web UI是蓝色或绿色。"
	  	}
	  }

	  failure 
	  {
	  		script
	  		{
	  			currentBuild.description = "构建失败"
	    		echo "failure 只有当前流水线或阶段的完成状态为failure，才允许在 post 部分运行该步骤, 通常web UI是红色。"
	  		}
	  }

	  unsuccessful 
	  {
	    echo "unsuccessful"
	  }

	  fixed 
	  {
	    echo "fixed"
	  }

	  changed 
	  {
	  		script
	  		{
	  			currentBuild.description = "changed"
	    		echo "changed 只有当前流水线或阶段的完成状态与它之前的运行不同时，才允许在 post 部分运行该步骤。"
	  		}
	  }
	}



}
