#!/usr/bin/env python
from lxml import etree
import time
from time import sleep
import os
import threadpool
import requests
from fake_useragent import UserAgent


def img_data():
    img = xx.xpath(
        '//*/ul[@id="dm-fy"]/li[not(@class="prev-page" or @class="next-page")]')
    mlist = len(img)
    return mlist


def get_imglist():
    urll = url+'?page=%d'
    imgtb = xx.xpath('//*[@id="container"]/main/article/h1/text()')[0]
    imgtbs = './'+str(imgtb)
    if not os.path.exists(imgtbs):
        os.mkdir(imgtbs)
    for page in (range(1, x)):
        new_url = format(urll % page)
        imgh = requests.get(url=new_url, headers=headers, proxies=proxy).text
        c = etree.HTML(imgh)
        xp = c.xpath("(//div[@align='center']//img)[1]/@src")[0]
        dic = {
            "name": imgtbs,
            "url": xp,
            "url_list": new_url
        }
        urls.append(dic)
        print("\rloading {}s...".format(page),end="")

def downloads(u):
    headers = {
        'User-Agent': ua.random,
        "Referer": u['url_list']
    }
    rep = requests.get(url=u['url'], headers=headers, proxies=proxy)
    xdd = rep.content
    if (rep.status_code == 200):
        img_name = './' + u['name'] + '/' + u['url'].split('/')[-1]
        with open(img_name, 'wb') as xd:
            xd.write(xdd)
        size = os.path.getsize(img_name)
        if size <= 36900:
            os.remove(img_name)
        else:
            print(f'{img_name} is ok！')
    else:
        print('error！')


def th(processes = 3):
    pool = threadpool.ThreadPool(processes)
    requests = threadpool.makeRequests(downloads, urls)
    [pool.putRequest(req) for req in requests]
    pool.wait()
if __name__ == "__main__":
    ua = UserAgent()
    url = input('url：')
    headers = {
        'User-Agent': ua.random,
        "referer": "https://www.tuaoo.cc/"
    }
    proxy = {
        "https": "https://220.179.118.246:8080"
    }
    xxx = requests.get(url, headers=headers, proxies=proxy)
    lsp = xxx.text
    xx = etree.HTML(lsp)
    urls = []
    t = time.perf_counter()
    x = img_data()
    get_imglist()
    dd = time.perf_counter()
    print("\nstart download...")
    th()
    print(f'Download time {time.perf_counter()-dd:.2f}s')
    print(f'Total time {time.perf_counter()-t:.2f}s')
    print('------DONE by Fxck------')
