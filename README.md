<p align="center">
  <h3 align="center">wakatime-sync</h3>
  <p align="center">Update Wakatime summary data to your gist every day</p>
</p>

---

## Setup

### Prep work

1. Create a new public GitHub Gist (<https://gist.github.com/>)
1. Create a token with the `gist` scope and copy it. (<https://github.com/settings/tokens/new>)
1. Create a WakaTime account (<https://wakatime.com/signup>)
1. In your account settings, copy the existing WakaTime API Key (<https://wakatime.com/settings/account>)

### Project setup

1. Fork this repo
2. Go to the repo **Settings > Secrets**
3. Add the following environment variables:
   - **GH_TOKEN:** The GitHub token generated above.
   - **WAKATIME_API_KEY:** The API key for your WakaTime account.
   - **GIST_ID:** The ID portion from your gist url: `https://gist.github.com/superman66/`**`75f3b2ec23c7f69594ca3d9e8b7ea81d`**..
4. Run workflow manually. Because workflows aren’t being run on forked repository.

### Push Daily Report to Wechat

if you are using Wechat, you can use **ServerChan(<http://sc.ftqq.com/>)** to push wakatime daily report to your Wechat.

#### Settting

1. Create a ServerChan account (<https://sct.ftqq.com/>)
2. Copy SCKEY (<https://sct.ftqq.com/sendkey>)
3. Bind your micromessage in ServerChan
4. Add SCKEY to repo **Secrets**: **SCU_KEY**

after that, you will receive Wakatime daily report everyday.

<p align="center">
  <img width="400" src="./screenshot/daily-report.jpg">
</p>

## Warning

In addition to a specific file's contents being truncated, the entire files list may be truncated if the total number exceeds 300 files. If the top level truncated key is true, only the first 300 files have been returned in the files list. If you need to fetch all of the gist's files, you'll need to clone the gist via the URL provided by git_pull_url.

[Gist Truncation](https://docs.github.com/en/rest/gists/gists?apiVersion=2022-11-28#truncation)

## More Usage

you can send the daily report to you email, telegram, Slack or other IM.
If you are interest in it, take a issue or PR.

## How can I use this data

You can use this data in Wakatime Dashboard(<http://wakatime.chenhuichao.com>).

You input the Gist ID, then you can see the report.

<p align="center">
  <img src="./screenshot/wakatime-dashboard.jpg">
</p>

---

## HTML chart

The `chart` branch also provides a simple HTML chart that displays data from the associated gist.
To use this chart, `checkout` the `chart` branch and edit the first two lines of the `dataloader.js` file to include your gist ID and github username.
Then, you can activate the github pages using the `chart` as the source to publish a live version of the chart:
<p align="center">
  <img src="./screenshot/chart-example.png">
</p>

This chart, available at `https://<github username>.github.io/WakaWaka/`, can be embedded into obsidian markdown as:

```markdown
<iframe src="https://brendanjohnharris.github.io/WakaWaka/index.html?start=29-04-2024&end=05-05-2024" width="100%" height="600px"></iframe>
```

Notice that the URL parameters, `?start=29-04-2024&end=05-05-2024`, can be used to specify the date range of the chart in the format `dd-mm-yyyy`.
