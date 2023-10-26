# Thanks to plembo for publishing this as [github gist](https://gist.github.com/plembo/84f80c920bb5ac6f19e53fe6f8db1ff7)
# Using GitHub Pages with a custom domain: Namecheap Edition
As often happens, I found the official documentation and forum answers to be "close, but no cigar", and so had to experiment a little to get things working.

The main problem for me was a lack of concrete configuration examples. That's not entirely GitHub's fault: having migrated from Google Domains to Namecheap in the middle of this project, I was once again reminded of how many different ways there are to do things in the name service universe [[1](#fn1)].

Although you'd think the simplest setup would be to merely configure for the subdomain case (https://www.example.com), in my experience using the apex domain (https://example.com) instead resulted in fewer complications.

## Procedure
So here's my recipe for using a custom domain with GitHub pages where Namecheap is the DNS provider:

1. Create A records for apex domain in Namecheap Advanced DNS panel for the domain(in this example, the fictional  "example.com"):

|Record Type|Host|Address|TTL|
|-----------|----|-------|----|
|A Record| @ | 185.199.108.153 | 30 minutes|
|A Record| @ | 185.199.109.153 | 30 minutes|
|A Record| @ | 185.199.110.153 | 30 minutes|
|A Record| @ | 185.199.111.153 | 30 minutes|
|CNAME Record| www | youracctname.github.io | 30 minutes|

2. Wait an hour, then test if DNS is set up properly:
```
me@myhost:~$ dig +noall +answer +nocmd example.com
example.com.		1800	IN	A	185.199.110.153
example.com.		1800	IN	A	185.199.109.153
example.com.		1800	IN	A	185.199.108.153
example.com.		1800	IN	A	185.199.111.153
```

```
me@myhost:~$ dig +noall +answer +nocmd www.example.com
www.example.com.	1800	IN	CNAME	youracctname.github.io.
youracctname.github.io.	3600	IN	A	185.199.108.153
youracctname.github.io.	3600	IN	A	185.199.111.153
youracctname.github.io.	3600	IN	A	185.199.110.153
youracctname.github.io.	3600	IN	A	185.199.109.153
```

3. In the GitHub repo config for Pages (Settings... Pages), enter your apex domain, "example.com" (not "www.example.com") in the "Custom Domain" box.

4. Wait for GitHub to generate ahd install the SSL certificate for that apex domain (at least an hour).

5. Test by going to "https://example.com" and "https://www.example.com".

I highly recommend _not_ changing domain registrars and DNS providers in the middle of all that.

## Notes
<a class="anchor" id="fn1">[1]</a> The other problem is how damned long it takes for things to propagate across global DNS, especially when starting with TTLs of an hour (the trick is to try reducing your TTL before making any other changes, going from an hour to fifteen minutes can make a huge difference in blood pressure readings). Even with shorter TTLs, you need to anticipate upwards of an hour delay between changes. So chill. Read a book. Talk to the dog.

## Further Reading
"Configuring a custom domain for your GitHub Pages site". _GitHub Docs_, https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site, Retrieved 9 September 2021.

"How do I link my domain to GitHub Pages". _Namecheap Knowledgebase_, https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/, Retrieved 10 September 2021.
