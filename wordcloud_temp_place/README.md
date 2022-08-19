# Keyword_Related_WordCloud
keyword related wordcloud

最终版本是 ```.\cloud_backend.py``` 封装成了函数，代码和```.\worldcloud_script.ipynb```里面的是一样的，后者多的是里面可以看频率+看词云的demo

## logic
1) 从```whole_text_upper.csv```里读取数据，从```defined_words.csv```中读取中英文对照表
2) 输入的keywords list里的词汇中在对照表里的翻译
3) 自```A_whole_stopwords.txt```读取停用词+写进代码里的停用词
4) 向jieba输入建议词汇（```defined_words.csv```里的+代码里的）
4) jieba 切分 (现在开了新词识别)
5) 统计词频后输出前60个最多次数的词，把在对照表里的中文词翻译成英文后，存进```words_frequency.csv```里

