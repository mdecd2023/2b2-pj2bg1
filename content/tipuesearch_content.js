var tipuesearch = {"pages": [{'title': 'About', 'text': '40723217網站: https://mdecd2023.github.io/2b2-pj2bg1/content/index.html \n 40723217倉儲: https://github.com/nfu40723217/2b2-pj2bg1 \n cdtemplate \n 倉儲網址:  https://github.com/mdecd2023/2b2-pj2bg1 \n 網站網址:  https://mdecd2023.github.io/2b2-pj2bg1/content/index.html \n https://mde.tw/pjcopsim', 'tags': '', 'url': 'About.html'}, {'title': 'w9', 'text': '\n', 'tags': '', 'url': 'w9.html'}, {'title': '40723217', 'text': '今日我使用了chatgpt幫助我解決了操作上的問題，以下是我所有解決chatgpt的總整理: \n Q:我在Scite上遇到了"系統找不到指定的檔案。" 但我不清楚是甚麼原因，能列舉可能的原因嗎? \n A:"系統找不到指定的檔案" 是一個錯誤訊息，通常代表了一個檔案或路徑並不存在或無法被找到。以下是可能導致這個錯誤的原因： \n 1.檔案或路徑不存在：這是最常見的原因，檔案或路徑可能已被刪除、移動或更改名稱。 2.權限不足：如果您不擁有足夠的權限來訪問該檔案或路徑，系統就會報告此錯誤。 3.檔案或路徑正在使用中：如果檔案或路徑正在被其他程式使用，例如正在被其他程式打開，您就無法訪問它。 4.磁碟問題：如果您的硬碟遇到了問題，例如壞道或損壞，也可能會導致系統找不到指定的檔案。 5.程式錯誤：有時候程式本身也可能導致這個錯誤，可能是因為程式中存在錯誤或不正確的路徑設置。 \n 建議您檢查檔案路徑是否正確，確認您有足夠的權限來訪問檔案，並關閉其他正在使用檔案的程式。如果問題仍然存在，您可以嘗試重新啟動您的電腦，或檢查您的硬碟是否存在問題。 \n Q:那麼在Scite的輸出欄位中出現"pyw -u 文件"代表著甚麼意思? \n A:在 Scite 的輸出欄位中出現 "pyw -u 文件" 代表著正在執行一個 Python 程式，其中： \n "pyw" 是 Python 的執行檔案名稱，通常用於執行 GUI 應用程式。 "-u" 代表著執行 Python 程式時使用的參數，這裡 "-u" 是代表使用 unbuffered I/O（無緩衝輸入輸出）。 "文件" 是指正在執行的 Python 程式的檔案名稱。 因此，"pyw -u 文件" 意味著 Scite 正在使用 Python 執行檔案執行指定的 Python 程式檔案，並使用 unbuffered I/O 參數。 \n Q:那麼如果Scite執行了這個檔案中的代碼，並出現找不到指定檔案，你認為會是哪種問題? \n A:如果在 Scite 中執行 Python 程式時出現 "系統找不到指定的檔案" 的錯誤訊息，通常代表著程式中的某個檔案無法被找到，可能是以下原因之一： \n 1.路徑不正確：程式中指定的路徑可能是不正確的，例如路徑名稱有誤、縮寫或空格使用不當等。 2.檔案不存在：程式中指定的檔案可能不存在，例如該檔案被刪除或被移動到了其他地方。 3.權限不足：程式無法訪問該檔案，可能是因為權限不足或該檔案被鎖定而無法被訪問。 4.檔案正在被其他程式使用：可能是因為該檔案正在被其他程式使用而無法被訪問。 \n 如果程式中指定的檔案名稱和路徑都是正確的，可以檢查一下該檔案是否存在，並且您是否擁有足夠的權限來訪問該檔案。如果該檔案存在，請確保該檔案沒有被其他程式鎖定。另外，您也可以嘗試使用絕對路徑或相對路徑指定檔案的位置，以確保程式可以正確找到該檔案。 \n Q:我沒有移動檔案，單純只是在Scite的上輸入python代碼 print("hi") ，然後儲存在Scite的根目錄上，卻還是發生上述問題，該如何解決? \n A:如果您在 Scite 的根目錄中建立一個 Python 檔案，並在該檔案中加入 print("hi") 代碼，然後在 Scite 中運行該檔案時出現了 "系統找不到指定的檔案" 的錯誤，這可能是因為 Scite 沒有正確設置當前工作目錄。 \n 請確保您正在使用的 Scite 版本支援當前工作目錄設置，並且您已經正確地設置了當前工作目錄。您可以在 Scite 中通過點擊 "Options" 菜單中的 "Open User Options File" 來編輯 Scite 的用戶設置文件，然後添加以下行： \n \n cwd=$(FilePath) \n 這個設置將當前工作目錄設置為當前打開的檔案所在的目錄。這樣，當您運行 Python 程式時，Python 將會在當前工作目錄中搜索檔案，而不是在 Scite 的根目錄中搜索檔案，從而避免 "系統找不到指定的檔案" 的錯誤。 \n Q:我已經嘗試加入了以上代碼 目前我的環境如下(以基本目錄為Y硬碟): Y:\\wscite 為Scite目錄 Y:\\Python310 為python3.10.0目錄 而python代碼 print("hi") 儲存名稱為 test.py 並儲存在scite目錄下 但依舊出現同樣的問題，該如何解決? \n A:如果您已經在 Scite 的用戶設置文件中設置了當前工作目錄，但仍然出現 "系統找不到指定的檔案" 的錯誤，您可以試試以下解決方案： 1.確保 Python 已經安裝並設置好環境變數：請確保 Python 已經成功安裝在您的電腦上，並且已經設置好環境變數，以便您可以在命令提示符號或 Scite 中運行 Python 程式。 2.檢查 Scite 設置：請確保 Scite 的設置正確，例如編譯器路徑、Python 版本等。 3.檢查 Python 程式碼：請確保您的 Python 程式碼沒有錯誤，例如語法錯誤或拼寫錯誤等。 4.嘗試使用絕對路徑：請嘗試使用絕對路徑指定 Python 程式碼所在的位置，以確保 Scite 可以正確找到該檔案。例如，在 Scite 中使用以下代碼來執行您的 Python 程式碼： \n import os os.system("Y:/wscite/Python310/python.exe Y:/wscite/test.py") \n 這個代碼將 Python 程式碼 test.py 所在的絕對路徑傳遞給 Python 解釋器，從而避免了 "系統找不到指定的檔案" 的錯誤。 如果以上方法仍然無法解決問題，您可以嘗試重新安裝 Scite 和 Python，或者嘗試使用其他的程式碼編輯器來編輯和運行 Python 程式碼。 \n Q:我發現它輸入此程式碼後跳亂碼了...... \n A:如果您在 Scite 中輸入 Python 程式碼後出現亂碼，可能是因為 Scite 的編碼格式與您的 Python 程式碼的編碼格式不一致所導致的。 您可以嘗試以下方法解決問題： 設置 Scite 的編碼格式：打開 Scite，從菜單欄選擇「選項」 >「編輯器設置」 >「默認編碼」，選擇與您的 Python 程式碼相同的編碼格式。 轉換 Python 程式碼的編碼格式：使用一些編輯器工具（例如 Notepad++）將您的 Python 程式碼轉換為 Scite 使用的編碼格式，以確保 Scite 正確顯示您的程式碼。 在程式碼中添加編碼宣告：在 Python 程式碼的開頭添加一行編碼宣告，例如： \n # -*- coding: utf-8 -*- \n 這個宣告將告訴 Python 程式碼的解釋器使用 UTF-8 編碼格式來解讀程式碼。 希望以上方法能夠幫助您解決問題。 \n Q:在運行 import os os.system("Y:/wscite/Python310/python.exe Y:/wscite/test.py") 程式碼後，問題依舊是找不到指定的檔案 要不然試著一個個排除吧 \n 在那之後就是一大段的排除錯誤。 \n 當我進行到半個鐘頭後，也步入了正軌。 \n 接著我便遇到了 >python3 -u test.py >Exit code: 9009 的問題，繼續使用chatgpt解決問題。 \n A: 錯誤代碼9009通常表示找不到可執行的命令。在這種情況下，可能是由於系統環境變數中的路徑未設置正確所致。 \n 您可以嘗試檢查系統環境變數，並確保Python的路徑已經被添加到Path變數中。如果沒有，請將Python的安裝路徑添加到Path中。在Windows上，您可以這樣做： \n \n 開啟「控制台」並點擊「系統」 \n 點擊「進階系統設置」 \n 在「環境變數」下找到「Path」並點擊「編輯」 \n 在新的窗口中，點擊「新增」，並添加Python的安裝路徑（例如：C:\\Python310） \n 點擊「確定」，保存所有更改 \n \n 完成後，關閉Scite並重新打開，然後再次嘗試運行您的Python代碼，看看問題是否已經解決了。 \n Q: 我將環境變數的「path」已經添加了Y:\\Python310作為路徑，但問題依舊沒有解決，該如何是好? \n A:如果已經設置好環境變數，而且路徑中已經包含了 Python 的安裝路徑，那麼可能問題出現在 Scite 的設置中。請再次檢查 Scite 的設置，確保以下兩點： \n \n \n 編譯器路徑：在 Scite 中選擇「選項」>「編譯器設置」，確認 Python 的執行檔路徑是否正確設置為 Y:\\Python310\\python.exe。如果路徑不正確，請修改為正確的路徑。 \n \n \n Python 版本：同樣在「編譯器設置」中，確認所選擇的 Python 版本是否與安裝在電腦上的版本相對應。如果版本不對應，請選擇正確的版本。 \n \n \n 如果以上兩點都確認無誤，那麼可能是 Scite 的某些設置或者系統環境的問題，這時可以考慮卸載 Scite 並重新安裝，或者嘗試在其他電腦上運行相同的代碼，檢查是否存在相同的問題。 \n Q: 如果我想為Scite正確設置python路徑，我該如何在 Open User Options 中添加「Y:\\Python310\\python.exe」路徑? \n 並且我的 Open User Options 是一片空白，只有你方才要我添加的 \n # This is an example SciTE properties file with a couple of settings\n# that show how to configure SciTE to work with Python.\n \n# Define the location of the Python executable.\ncommand.go.*.py=python3 -u $(FileNameExt)\n \n# Enable the Python lexer.\nlexer.$(file.patterns.py)=python\n \n# Set the encoding for Python source code files.\ncode.page=65001 \n 這樣仍然不足，那請問是要修哪邊? \n A: 如果你的 Open User Options 中只有上述內容，那麼可以手動添加以下內容來指定 Python 路徑： \n # Define the location of the Python executable.\ncommand.go.*.py=python Y:/wscite/Python310/python.exe "$(FilePath)" \n 請將上述內容添加至 Open User Options，然後保存並重新啟動 Scite。之後嘗試運行你的 Python 程式，看看是否能夠正常執行。 \n Q:「Y:/wscite/Python310/python.exe "$(FilePath)"」是指我安裝python310的路徑嗎? \n A:是的，这里的路径指的是你安装 Python 3.10 的路径。如果你安装的 Python 版本不是 3.10，那么你需要将路径中的 "Python310" 替换为你安装的 Python 版本号。 \n Q:但我的路徑是「Y:\\Python310\\python.exe」 而我的Scite路徑則是「Y:\\wscite\\sciTE.exe」 請修正一下上方代碼 \n A:非常抱歉，我打錯了，下面是正確的代碼： \n \n command.go.*.py=Y:/Python310/python.exe "$(FilePath)" \n 請注意反斜線改成斜線，並且路徑前加上磁盤標記Y:，如此一來，Scite就能夠找到Python的路徑了。 \n 我終於讓我的Scite找到路徑了！終於能夠啟動.py檔案了 \n 到了這裡，終於不再出現9009錯誤，我也得以啟動py檔案。 \n Q:下一個問題是在python程式中，import keyboard應該是意旨匯入"鍵盤"的函式，我的理解有誤嗎? \n A:你的理解有一點小錯誤， keyboard \xa0 模組並不是匯入整個鍵盤的函式，而是一個 Python 第三方庫，可以用來監聽和模擬按鍵事件。在使用 \xa0 keyboard \xa0 模組時，通常會使用其中的 \xa0 on_press \xa0 和 \xa0 on_release \xa0 方法來註冊按鍵事件的處理函數，或者使用 \xa0 send \xa0 方法來模擬按鍵事件。 \n Q:好，謝謝你讓我理解了。那麼 Traceback (most recent call last): File "Y:\\CoppeliaSimEdu\\newbing_bubbleRob\\newbing_bubbleRob_remoteapi1.py", line 5, in <module> import keyboard ModuleNotFoundError: No module named \'keyboard\' \n 的錯誤而言，是代表著不存在這個第三方庫? \n A:是的，這個錯誤提示意味著在你的 Python 環境中沒有安裝 \xa0 keyboard \xa0 這個第三方庫。你需要先安裝這個庫才能在你的 Python 程式中使用它。你可以使用 \xa0 pip \xa0 來安裝這個庫，請在終端機中輸入以下指令： \n pip install keyboard \n 安裝完成後，你應該就可以在你的 Python 程式中成功匯入\xa0 keyboard \xa0了。 \n Q:但我出現了 Fatal error in launcher: Unable to create process using \'"F:\\senior\\mde2022\\portable_python_3.10.6\\Python310\\python.exe" "y:\\Python310\\Scripts\\pip.exe" install keyboard\': ??????????? 這個問題...... 等等，這個F;\\的路徑很奇怪，我想我得修復它 我的y槽路徑實際上是使用可攜帶系統虛擬的，路徑是"F:\\3down\\wcm2023\\python311_w1_cd2023_cmsimde\\data" 我該如何將上述路徑導正? \n 在這裡，我和chatgpt鬼打牆了，所以讓我們直接跳到正確方法。 \n A:這個錯誤提示說在執行命令 \xa0 "F:\\senior\\mde2022\\portable_python_3.10.6\\Python310\\python.exe" "y:\\Python310\\Scripts\\pip.exe" install keyboard \xa0 時遇到了致命錯誤。具體原因可能有很多，但是根據你之前的描述，你使用的 Python 程序並非安裝在 \xa0 F:\\senior\\mde2022\\portable_python_3.10.6\\Python310\\ \xa0 目錄下，而是安裝在 \xa0 F:\\3down\\wcm2023\\python311_w1_cd2023_cmsimde\\data\\Python310\\ \xa0 目錄下。因此，如果你想安裝 \xa0 keyboard \xa0 模塊，你需要在命令行中使用正確的 Python 程序路徑和 pip 工具路徑。以下是可能適用於你的命令： \n F:\\3down\\wcm2023\\python311_w1_cd2023_cmsimde\\data\\Python310\\python.exe -m pip install keyboard \n 這個命令使用了正確的 Python 程序路徑和 pip 工具路徑，它將\xa0 keyboard \xa0模塊安裝在你的 Python 環境中。請注意，你需要在命令行中切換到包含上述 Python 程序的目錄中才能運行此命令。 \n \n 最終，我的BubbleRob終於得以運行。 \n \n \n \n', 'tags': '', 'url': '40723217.html'}, {'title': '40923219', 'text': '連跑範例都出bug我真的不解 想import 模組一直找不到，跑安裝又說有 組長說可能是路徑的問題，之後看他是怎麼設定的吧 我自己瞎找已經行不通了 \n 終於解決了路徑問題 \n \n', 'tags': '', 'url': '40923219.html'}, {'title': '40923225', 'text': '今天試著嘗試多人操控自走車，目前先試試兩台，之後再慢慢增加。 \n 不得不說，真的很有趣。 \n 雖然過程很讓我感到挫折，但還是會慢慢跟上其他人的腳步。 \n', 'tags': '', 'url': '40923225.html'}, {'title': '40923246', 'text': '今天交給我們的新模擬，用兩個py控制兩台車 \n 控制紅色那台可以正常運作 \n \n 但我控制綠色那台時一直跑出 找不到__main__ \n \n 問chatgpt 都是回python路徑問題 \n \n 嘗試用了討論區的解法，也是一樣找不到__main__ \n \n \n 但使用python開啟則可以運作 \n \n \n \n', 'tags': '', 'url': '40923246.html'}, {'title': 'w10', 'text': '1.What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n \n 40923219號回答: \n zmq是提供遠端連接的函式庫，可以運用在CoppeliaSim中。 \n \n 2.How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n \n 40723217使用chatgpt回答: \n 使用zmqRemoteAPI建立Python腳本和CoppeliaSim之間的連接，可以按照以下步驟進行操作： \n 1.在CoppeliaSim中啟用遠程API服務：在CoppeliaSim中的選單中選擇File -> Open Scene，然後選擇一個場景檔案。接著，在CoppeliaSim的選單中選擇Remote API -> Enable remote API，確保選項已勾選。 \n 2.在Python中安裝zmq和zmqRemoteAPI：在終端機中輸入以下指令安裝zmq和zmqRemoteAPI：pip install pyzmq 和 pip install zmqRemoteAPI \n 3.在Python中建立遠程連接：在Python腳本中加入以下程式碼，建立一個遠程連接。 \n \n import zmq\nimport time\n\n# 定義遠程API端口號\nport = 19997\n\n# 建立遠程連接\ncontext = zmq.Context()\nsocket = context.socket(zmq.REQ)\nsocket.connect("tcp://127.0.0.1:%s" % port)\n\n# 測試連接是否成功\nsocket.send_string("Hello")\nmessage = socket.recv_string()\nprint("Received reply:", message) \n \n 4.使用遠程API進行操作：建立遠程連接後，就可以使用zmqRemoteAPI中提供的函數進行CoppeliaSim的操作了。例如，以下程式碼可以在CoppeliaSim中顯示一個對話框。 \n \n # 使用遠程API顯示一個對話框\nsocket.send_string("simDisplayDialog(\'Hello from Python!\', sim_dlgstyle_message, true)")\nmessage = socket.recv_string()\nprint("Received reply:", message) \n 3. What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n \n 40923246號回答: \n 遠程控制模組、在外部應用程式之間交換數據、可視化顯示模組控制數據、自動化測試和驗證模組。 \n \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n \n 40923219號回答: \n CoppliaSim 跟zmqRemoteAPI都是免費的且安全，我上網查詢zmq的優點查到的都是方便使用，但是我至今操作上仍有很大的困難，這應該算缺點(雖然感覺像是我的缺點而不是zmq的) \n \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n \n 40723217使用chatgpt回答: \n 以上就是使用zmqRemoteAPI建立Python腳本和CoppeliaSim之間連接的步驟。 \n 使用zmqRemoteAPI在CoppeliaSim中可以完成許多項目或任務，例如： \n 控制機械臂：您可以使用zmqRemoteAPI控制CoppeliaSim中的機械臂模型，讓其執行各種動作，例如拾取和放置物品。 \n 仿真感測器：您可以使用zmqRemoteAPI模擬各種感測器，例如相機、激光雷達、超聲波傳感器等，並且從CoppeliaSim中獲取感測器數據。 \n 自主移動機器人：您可以使用zmqRemoteAPI控制移動機器人模型，讓其在CoppeliaSim中自主移動和避障，並且實時獲取位置和速度數據。 \n 建立智能系統：您可以使用zmqRemoteAPI將CoppeliaSim中的多個模型和感測器組合起來，建立一個智能系統，例如自動駕駛系統、智能物流系統等。 \n 總的來說，zmqRemoteAPI可以讓您在CoppeliaSim中執行各種複雜的任務，並且實時獲取模擬結果，這對於機器人開發和智能系統設計非常有幫助。 \n 最後，解決問題的方法: \n 我要如何避免我和我的協同組員在同時更改github.com的小組倉儲時互相衝突? \n 在使用 Github 小組倉儲時，可以採用以下幾種方式避免互相衝突： \n 使用版本控制：當多個協同組員同時更改專案時，使用版本控制工具如 Git 可以讓每個協同組員在自己的本地環境中進行更改，然後再將更改推送到中央倉儲。這樣可以避免不同協同組員之間的更改互相干擾。 \n 分支管理：在使用版本控制工具時，可以為不同協同組員分配不同的分支，這樣每個協同組員可以在自己的分支上進行更改，然後再將更改合併到主分支中。這樣可以避免不同協同組員之間的更改衝突。 \n 建立溝通渠道：在進行協同開發時，建立良好的溝通渠道非常重要。協同組員應該定期進行會議或討論，確保大家在專案的目標、進度和工作分配等方面都有清晰的了解。如果有不明確的地方，協同組員應該及時溝通，以避免互相衝突。 \n 定期更新倉儲：在進行協同開發時，每個協同組員都應該定期更新倉儲，以確保自己的本地代碼與中央倉儲保持同步。這樣可以避免由於版本不一致而導致的互相衝突。 \n \n 40723217：除錯可攜、撰寫程式 \n 40923219：討論及修改程式 \n 40923225：場景繪製、討論及測試程式 \n 40923246：討論及查詢程式 \n \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': '40723217-W10', 'text': '我在4/25嘗試為我的red-green-bubbleRob添加了記分板、球場等內容，製作這些使用了第十組所製作的感測器與其他內容，並且使用了chatgpt去建構感測器中的lua指令，使感測器可以檢測物體並將球場重製與加分。 \n 這裡是chatgpt的內容問答: \n Q:coppeliasim 可以用lua程式操控物體的世界座標嗎?  \n A:是的，您可以使用Lua脚本在CoppeliaSim中控制对象的世界坐标。 在CoppeliaSim中，您可以使用Lua脚本编写控制代码，以控制模型和仿真环境中的各种对象。通过编写Lua脚本，您可以访问对象的位置、旋转和缩放信息，并使用Lua脚本将对象移动到所需的位置。 例如，您可以使用以下代码将对象移动到世界坐标(x,y,z)： pos = {x,y,z} sim.setObjectPosition(objectHandle, -1, pos) 其中，objectHandle是对象的句柄，pos是一个包含x、y、z坐标的Lua表。sim.setObjectPosition函数将对象移动到指定的位置。 \n Q:coppeliasim 可以用lua程式操控物體的世界角度嗎? \n A:是的，您可以使用Lua脚本在CoppeliaSim中控制对象的世界角度。 在CoppeliaSim中，您可以使用Lua脚本编写控制代码，以控制模型和仿真环境中的各种对象。通过编写Lua脚本，您可以访问对象的旋转信息，并使用Lua脚本将对象旋转到所需的角度。 例如，您可以使用以下代码将对象绕着Z轴旋转angle弧度： ang = {0,0,angle} sim.setObjectOrientation(objectHandle, -1, ang) 其中，objectHandle是对象的句柄，ang是一个包含绕x、y、z轴旋转的角度的Lua表。sim.setObjectOrientation函数将对象旋转到指定的角度。您可以根据需要修改ang表中的值来控制对象的旋转。 \n Q:接著我將感測器的程式改寫如下: \n function sysCall_init()\n    sensor = sim.getObject(\'./sensor\')\n    sensor2 = sim.getObject(\'./sensor2\')\n    bubbleRob1 = sim.getObject(\'./bubbleRob1\')\n    bubbleRob2 = sim.getObject(\'./bubbleRob2\')\n    Sphere = sim.getObject(\'./ball\')\n    pos1 = {-1,0,0.15}\n    pos2 = {1,0,0.15}\n    posS = {0,0,0.15}\n    ang1 = {0,0,0}\n    ang2 = {0,0,3.14}\n    bubbleRobBase = 4\n    ball = sim.getObject(\'./ball\')\n    initialBubbleRobPosition = sim.getObjectPosition(bubbleRobBase, -1)\n    initialBubbleRobOrientation = sim.getObjectOrientation(bubbleRobBase, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n    -- do some initialization here\n    count = 9000\n    score1 = 0\n    score2 = 0\n    xml = [[\n        <ui closeable="false" resizeable="false" activate="false">\n            <label text="0" style="* {background-color: #595; color: #000; font-size: 64px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="10"/>\n            <label text="0" style="* {background-color: #A00; color: #FFF; font-size: 64px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="20"/>\n            <label text="0" style="* {background-color: #00A; color: #FFF; font-size: 64px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="30"/>\n        </ui>\n    ]] --\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\nend\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(sensor)\n    result2=sim.readProximitySensor(sensor2)\n    -- 0 or 1\n    if(result>0)then\n        --sim.stopSimulation()\n        sim.setObjectPosition(bubbleRobBase, -1, initialBubbleRobPosition)\n        sim.setObjectOrientation(bubbleRobBase, -1, initialBubbleRobOrientation)\n        sim.setObjectPosition(ball, -1, initialballPosition)\n        sim.setObjectOrientation(ball, -1, initialballOrientation)\n        score1 = score1 +1 \n        sim.setObjectPosition(bubbleRob1, -1, pos1)\n        sim.setObjectPosition(bubbleRob2, -1, pos2)\n        sim.setObjectPosition(Sphere, -1, posS)\n        sim.setObjectOrientation(bubbleRob1, -1, ang1)\n        sim.setObjectOrientation(bubbleRob2, -1, ang2)\n    end\n    if(result2>0)then\n        --sim.stopSimulation()\n        sim.setObjectPosition(bubbleRobBase, -1, initialBubbleRobPosition)\n        sim.setObjectOrientation(bubbleRobBase, -1, initialBubbleRobOrientation)\n        sim.setObjectPosition(ball, -1, initialballPosition)\n        sim.setObjectOrientation(ball, -1, initialballOrientation)\n        score2 = score2 +1 \n        sim.setObjectPosition(bubbleRob1, -1, pos1)\n        sim.setObjectPosition(bubbleRob2, -1, pos2)\n        sim.setObjectPosition(Sphere, -1, posS)\n        sim.setObjectOrientation(bubbleRob1, -1, ang1)\n        sim.setObjectOrientation(bubbleRob2, -1, ang2)\n    end\n    if count > 0 then\n        count = count - 1\n        local minutes = math.floor(count / 60)\n        local seconds = count % 60\n        local timeStr = string.format("%d:%02d", minutes, seconds)\n        simUI.setLabelText(ui, 10, timeStr)\n        simUI.setLabelText(ui, 20, tostring(score1))\n        simUI.setLabelText(ui, 30, tostring(score2))\n    else\n        sim.stopSimulation()\n    end\n\nend \n \n \n', 'tags': '', 'url': '40723217-W10.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};