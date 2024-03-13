# Rancher App Launcher Extension

Rancher App Launcher Extension is a powerful tool for improved accessibility and resource discovery within the Rancher ecosystem. The extension is designed to extract ingresses from various clusters and consolidate them into a unified global resource page. With neatly organized cards for each discovered service, the tool offers an efficient method of displaying and accessing your Rancher services, making the Rancher experience seamless for both new and experienced users.

## How to Run

1. Clone this repository to your machine.
2. Install the npm dependencies using the command `yarn install`.
3. Run the extension locally with the command `API=<Rancher Backend URL> yarn dev`.

## Usage

- Once the Rancher App Launcher Extension is installed, you can access a unified resource page from the main dashboard.
- This page showcases cards for each discovered service and ingress, allowing you to conveniently open the service with a simple click.
    *The extension is designed to improve discoverability, and offer a straightforward way to navigate the complexities of multi-cluster environments.*
- Global apps will show at the top as a combination of global apps defined by cluster YAML files and user-selected favorites
    *\*note: global apps can be set by modifying the service's `metadata.annotations['extensions.applauncher/global-app']` to 'true'*
- Select different clusters to view the services of. Global Apps perisist across all views.
- The view can be changed with the view buttons from grid to list views.

## Contribution

Your contribution matters! If you're looking to enhance the functionalities of this extension or have innovative ideas to improve the discoverability further, we warmly welcome pull requests. Let's make the Rancher environment more user-friendly together!

## Support

If you encounter any issues, have questions or suggestions, please file them in our issue tracker. We're committed to providing a smooth user experience and appreciate your feedback to continually improve.

Rancher App Launcher Extension is here to address the need for effective discoverability within the Rancher platform. Let's make resource navigation simpler and more efficient!
