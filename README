# Node.js Fetch inconsistencies
## 407
If the server responds with a 407 fetch will fail on both node.js and chromium browsers with the following error.
```bash
Error: TypeError: fetch failed
    at node:internal/deps/undici/undici:12344:11
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async fetch407Endpoint (fourZeroSeven/fetch.js:22:22) {
  cause: Error
      at makeNetworkError (node:internal/deps/undici/undici:5585:35)
      at httpNetworkOrCacheFetch (node:internal/deps/undici/undici:10731:18)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async httpFetch (node:internal/deps/undici/undici:10545:37)
      at async node:internal/deps/undici/undici:10342:20
      at async mainFetch (node:internal/deps/undici/undici:10332:20)
}
```
Sending the same request with cURL or fetch in Firefox cURL results in the expected response with a 407 status
## 421
If the client sends a request with a body of length greater than 0 and the server responds with a 421 status then node.js fetch will fail with the following error
```bash
Error: TypeError: fetch failed
    at node:internal/deps/undici/undici:12344:11
    at async fetch421Endpoint (fourZeroSeven/fetch.js:38:22) {
  cause: RequestContentLengthMismatchError: Request body length does not match content-length header
      at AsyncWriter.end (node:internal/deps/undici/undici:9742:19)
      at writeIterable (node:internal/deps/undici/undici:9646:16)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
    code: 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH'
  }
}

```
Sending the same request with cURL or fetch in Firefox or Chrome we get the expected response with a 421 status.

Because it only happens with request bodies of length 1 or greater, GET requests will always work as expected
