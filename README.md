# News API Proxy

## Introduction

When I was developing an application that uses the [News API](https://newsapi.org/), I had a problem: the news API couldn't enable CORS for my frontend. So, I needed to develop this proxy for intermediate the requests.

## NextJS

I want to emphasize that I used NextJS because I needed to deploy it without using a server. So, NextJS was very useful to do this, because it is serverless.

## Reuse

This proxy can be used as a proxy to any API, you just need to do some changes on the API that the code calls.
