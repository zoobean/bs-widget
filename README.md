# bs-widget

Embeddable Beanstack goal widget bundle built with Rollup.

## Quick Start

Add a container element where the widget should render, include the script, then initialize the widget.

### Option A: CDN (published package)

```html
<div id="bs-widget"></div>
<script src="https://unpkg.com/bs-widget@1.0.2/dist/bundle.js"></script>
<script>
	let widget = new BSWidget({
		microsite: 6,
		container: "#bs-widget",
		color: "purple",
		styled: true,
		loadingText: "Loading widget...",
		apiBaseUrl: "https://beanstackedu.beanstack.org/api/v2/microsites_group_statistics/",
	});
</script>
```

You can also use jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/bs-widget@1.0.2/dist/bundle.js"></script>
```

### Option B: Local build

```html
<div id="bs-widget"></div>
<script src="dist/bundle.js"></script>
<script>
	let widget = new BSWidget({
		microsite: 6,
		container: "#bs-widget",
		color: "purple",
		styled: true,
		loadingText: "Loading widget...",
		apiBaseUrl: "https://beanstackedu.beanstack.org/api/v2/microsites_group_statistics/",
	});
</script>
```

## Configuration

`BSWidget` supports these commonly used options:

- `microsite` (number): microsite group id appended to `apiBaseUrl`
- `container` (string): CSS selector for target mount element
- `color` (string): base accent color for widget styles
- `styled` (boolean): inject widget styles when `true`
- `loadingText` (string): message shown while request is in flight
- `apiBaseUrl` (string): base endpoint that returns JSON statistics
- `requestTimeoutMs` (number): optional XHR timeout in milliseconds (`0` disables timeout)
- `onLoad` (function): optional callback called with fetched `statistic` payload
- `onError` (function): optional callback called with `{ statusCode, message }`

Default `apiBaseUrl`:

```text
https://beanstackedu.beanstack.org/api/v2/microsites_group_statistics/
```

If your endpoint redirects to an HTML page instead of returning JSON, the widget cannot render stats from that URL.

### Lifecycle methods

- `widget.refresh()` re-fetches and re-renders the widget in place.
- `widget.destroy()` removes the rendered widget and aborts any in-flight request.

## Requirements

- Node.js 18+
- Yarn 1.x

## Development

Install dependencies:

```bash
yarn install
```

Start local preview with watch support (recommended):

```bash
yarn dev
```

This runs Rollup in watch mode and serves the project at `http://localhost:8080`.

Start local preview and auto-open in browser:

```bash
yarn dev:open
```

Start only Rollup in watch mode:

```bash
yarn start
```

Build once:

```bash
yarn build
```

## Testing

Run smoke test (build + verification):

```bash
yarn test
```

The smoke test checks that `dist/bundle.js` is generated and includes the `BSWidget` global constructor.

## Release checks

Run all checks before publishing:

```bash
yarn verify
```

`prepublishOnly` runs the same verification automatically to prevent publishing without a fresh passing build.

## Automated release (npm + GitHub Release)

This repo includes a tag-driven workflow at `.github/workflows/release.yml`.

1. Bump the package version in `package.json`.
2. Commit and push your changes.
3. Create and push a matching tag (`v` + package version):

```bash
git tag v1.0.2
git push origin v1.0.2
```

On tag push, GitHub Actions will:

- validate tag version matches `package.json`
- run `yarn verify`
- publish to npm
- create a GitHub Release with generated notes