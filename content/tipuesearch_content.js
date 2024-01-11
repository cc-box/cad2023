var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/cc-box/cad2023 \n 小組網站連結 \n https://41123112.github.io/cad2023_ag4/content/index.html \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '座位表程式', 'text': '', 'tags': '', 'url': '座位表程式.html'}, {'title': '程式碼', 'text': '# Brython code starts\nfrom browser import document, html\n\n# get output html location\nbrython_div = document["brython_div1"]\nbrython_div <= html.P(id="output_table")\n\n# Replace this line with the actual file content\nfile_content = open("https://mde.tw/cadnote/downloads/2a_w12_seat.txt").read()\n\n# Create a dictionary to store student numbers and seat numbers\nseat_map = {}\n\n# Process each line of the file content\nfor line in file_content.splitlines():\n    # Split each line using tabs\n    elements = line.split("\\t")\n\n    # If the line contains seat information\n    if len(elements) == 2 and "(" in elements[1]:\n        # Extract student number and seat information\n        stud_num = elements[0].strip()\n        seat_info = elements[1].strip()\n\n        # Add student number and seat information to the dictionary\n        seat_map[stud_num] = seat_info\n\n# Find the maximum row and column values\nmax_row = max(int(seat_info[1]) for seat_info in seat_map.values())\nmax_col = max(int(seat_info[3]) for seat_info in seat_map.values())\n\n# Initialize a 2D list to represent the seating arrangement\nseating_arrangement = [["缺席👎"] * max_col for _ in range(max_row)]\n\n# Populate the seating arrangement with student information\nfor stud_num, seat_info in seat_map.items():\n    row = int(seat_info[1]) - 1\n    col = int(seat_info[3]) - 1\n    seating_arrangement[row][col] = f"座號: {seat_info}, 學號: {stud_num}"\n\n# Display the result in the HTML document\nresult_html = "<table>"\nfor row in seating_arrangement:\n    result_html += "<tr>"\n    for cell_content in row:\n        result_html += f"<td>{cell_content}</td>"\n    result_html += "</tr>"\nresult_html += "</table>"\n\n# Update the HTML content with the result\ndocument["output_table"].html = result_html\n# Brython code ends\n \n', 'tags': '', 'url': '程式碼.html'}, {'title': '程式示範網頁', 'text': '連結 \n', 'tags': '', 'url': '程式示範網頁.html'}, {'title': '座位表成果', 'text': '\n \n \n \n 座號: (1,1), 學號: 41123123 \n 座號: (1,2), 學號: 41123119 \n 座號: (1,3), 學號: 41123105 \n 座號: (1,4), 學號: 41123152 \n 座號: (1,5), 學號: 41123120 \n 座號: (1,6), 學號: 41123108 \n 座號: (1,7), 學號: 41123145 \n 座號: (1,8), 學號: 41123137 \n 座號: (1,9), 學號: 41123130 \n \n \n 座號: (2,1), 學號: 41123140 \n 座號: (2,2), 學號: 41123150 \n 座號: (2,3), 學號: 41123124 \n 缺席👎 \n 座號: (2,5), 學號: 41136123 \n 座號: (2,6), 學號: 41123148 \n 座號: (2,7), 學號: 41123116 \n 座號: (2,8), 學號: 41123146 \n 缺席👎 \n \n \n 座號: (3,1), 學號: 41123139 \n 座號: (3,2), 學號: 41123131 \n 座號: (3,3), 學號: 41123135 \n 座號: (3,4), 學號: 41123149 \n 座號: (3,5), 學號: 41123122 \n 座號: (3,6), 學號: 41123134 \n 座號: (3,7), 學號: 41123107 \n 座號: (3,8), 學號: 41123101 \n 座號: (3,9), 學號: 41123102 \n \n \n 座號: (4,1), 學號: 41123128 \n 座號: (4,2), 學號: 41123117 \n 座號: (4,3), 學號: 41123114 \n 座號: (4,4), 學號: 41123126 \n 座號: (4,5), 學號: 41123115 \n 座號: (4,6), 學號: 41123111 \n 缺席👎 \n 座號: (4,8), 學號: 41123112 \n 缺席👎 \n \n \n 座號: (5,1), 學號: 41123144 \n 座號: (5,2), 學號: 41123141 \n 座號: (5,3), 學號: 41123143 \n 座號: (5,4), 學號: 41123129 \n 缺席👎 \n 缺席👎 \n 座號: (5,7), 學號: 41023134 \n 座號: (5,8), 學號: 41023156 \n 座號: (5,9), 學號: 41023155 \n \n \n 座號: (6,1), 學號: 40923118 \n 座號: (6,2), 學號: 41123154 \n 座號: (6,3), 學號: 41123153 \n 缺席👎 \n 座號: (6,5), 學號: 41023245 \n 座號: (6,6), 學號: 41023246 \n 缺席👎 \n 座號: (6,8), 學號: 40923127 \n 座號: (6,9), 學號: 40923213 \n \n \n \n \n', 'tags': '', 'url': '座位表成果.html'}, {'title': '安裝繪圖套件', 'text': '', 'tags': '', 'url': '安裝繪圖套件.html'}, {'title': 'cero', 'text': '\n \n', 'tags': '', 'url': 'cero.html'}, {'title': 'SOLIDWORKS', 'text': '\n \n \n \n', 'tags': '', 'url': 'SOLIDWORKS.html'}, {'title': 'hw', 'text': '', 'tags': '', 'url': 'hw.html'}, {'title': '繪圖檔案', 'text': '全部零件 \n 繪圖過程 \n \n \n', 'tags': '', 'url': '繪圖檔案.html'}, {'title': 'Replit', 'text': '影片示範 \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 's1511', 'text': '', 'tags': '', 'url': 's1511.html'}, {'title': 'localhost', 'text': '', 'tags': '', 'url': 'localhost.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}, {'title': 'exam', 'text': '', 'tags': '', 'url': 'exam.html'}, {'title': 'step1', 'text': '基本零組件設計繪圖 \n \n \n \n', 'tags': '', 'url': 'step1.html'}, {'title': 'step2', 'text': '', 'tags': '', 'url': 'step2.html'}, {'title': 'step3', 'text': '', 'tags': '', 'url': 'step3.html'}, {'title': 'step4', 'text': '', 'tags': '', 'url': 'step4.html'}, {'title': 'step5', 'text': '', 'tags': '', 'url': 'step5.html'}, {'title': 'step6', 'text': '', 'tags': '', 'url': 'step6.html'}, {'title': '自我評分', 'text': '自評分數：60 \n 每周都有為小組以其個人網站加入點修改，會使用s1511、replit更新網站 \n A: 是否按照進度明確標示倉儲的改版歷程 \n 答:是 \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 \n 答:是 \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 \n 答:是(使用Replit、s1511.cycu.org 成功) \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 \n 答:是(使用SOLIDWORKS) \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 \n 答:是 \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim \n 答:是 \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 \n 答:否 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 \n 答:否 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 \n 答:(完成step1) \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 \n 答:還未 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n 答:還未 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 \n 答:還未 \n \n \n \n', 'tags': '', 'url': '自我評分.html'}]};