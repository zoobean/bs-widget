# bs-widget

Embeddable Beanstack goal widget bundle built with Rollup.

## Quick Start

Add a container element where the widget should render, include the script, then initialize the widget.

### Option A: CDN (published package)

```html
<div id="bs-widget"></div>
<script src="https://unpkg.com/bs-widget@1.0.1/dist/bundle.js"></script>
<script>
	let widget = new BSWidget({
		microsite: 6,
		container: "#bs-widget",
		color: "purple",
		styled: true,
		loadingText: "Loading widget...",
	});
</script>
```

You can also use jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/bs-widget@1.0.1/dist/bundle.js"></script>
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
	});
</script>
```

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