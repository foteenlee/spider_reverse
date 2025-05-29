import requests
from lxml import etree

url = 'https://www.itjc8.com/forum.php?mod=post&infloat=yes&action=reply&fid=56&extra=&tid=13562&replysubmit=yes&inajax=1'
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "Cookie": "7sAp_2132_saltkey=LNidhhvA; 7sAp_2132_lastvisit=1747618027; _ga=GA1.1.570709232.1747621629; 7sAp_2132_sid=KnymFb; 7sAp_2132_seccodecSKnymFb=74.6977096d34f134541e; 7sAp_2132_ulastactivity=090bK%2FeinY0pwm%2FUosxjoa2GmvAAcEB9iXfL1v2O4DxOSgjpny64; 7sAp_2132_auth=46abXbVpS1vPdc1PMNjEw6HesrUCNqkwPho%2FFsUVPfoLOuDl2%2FLOxS%2FOOjclehzoNlfa8whtwIomGmL2JY16ZUsuZw; 7sAp_2132_lastcheckfeed=14058%7C1747621684; 7sAp_2132_connect_is_bind=1; 7sAp_2132_nofavfid=1; 7sAp_2132_hide_taskshow=1; 7sAp_2132_st_t=14058%7C1747621966%7C88bd7642547473839dc67c089f0d3956; 7sAp_2132_atarget=1; 7sAp_2132_forum_lastvisit=D_56_1747621966; 7sAp_2132_visitedfid=56; 7sAp_2132_smile=1D1; 7sAp_2132_viewid=tid_15249; 7sAp_2132_sendmail=1; 7sAp_2132_clearUserdata=forum; 7sAp_2132_creditnotice=0D0D0D0D0D0D0D0D0D14058; 7sAp_2132_creditbase=0D121D15D0D38D0D0D0D0; 7sAp_2132_creditrule=%E5%8F%91%E8%A1%A8%E5%9B%9E%E5%A4%8D; 7sAp_2132_lastact=1747622518%09forum.php%09viewthread; 7sAp_2132_st_p=14058%7C1747622518%7C31688b44f274b16e16eca42464c953cd; _ga_YQG59GBWTE=GS2.1.s1747621629$o1$g1$t1747622518$j0$l0$h0",
    "Referer": "https://www.itjc8.com/thread-13562-1-1.html",
}

data = {
    "formhash": "17fd2a4a",
    "handlekeky": "reply",
    "noticeauthor": "",
    "noticetrimstr": "",
    "noticeauthormsg": "",
    "usesig": "1",
    "subject": "",
    "message": "faslkdfasldkfjsadfji",
}

get_response = requests.get(url, headers=headers, data=data)

print(get_response.text)



