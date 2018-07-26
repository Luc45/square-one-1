The Post Loop panel is comprised of a panel title, text content, and a magical `Post_List` field.

The `Post_List` field has 3 main features and allows you to manually or dynamically add posts or content to this panel.

## Usage

1. Manually add individual posts and select the order in which they dispaly.
2. Manually add custom content(similar to the ([Card Grid](/component_docs/cardgrid) panel) with a title, text content, link, and image.
3. Choose to dynamically select a preordered group of posts from any combination of active Custom Post Types and Taxonomies within your site.

Items #1 and #2 above can be combined to create a truly unique Post Loop
Item #3 facilitiates an easy solution for displaying current content from your site without ever having to update the panel settings.

## Fields

### `title`
* label: `Title`
* type: `Text`

### `description`
* label: `Description`
* type: `TextArea`
* richtext: `true`

### `posts`
* label: `Posts`
* type: `Post_List`
* min: `1`
* max: `8`
* show_max_control: `true`

## Components

### [Card](/components_docs/card)
* twig var: `{{ posts }}`
* twig var type: `array`
* component children: `Title`, `Image`, `Button`

### [Title](/components_docs/title)
* child of: `Card`
* usage: `Post Title`
* automatically set based on the selected post

### [Image](/components_docs/image)
* child of: `Card`
* usage: `Post Featued Image`
* automatically set based on the selected post

### [Button](/components_docs/button)
* child of: `Card`
* usage: `Post Permalink`
* automatically set based on the selected post