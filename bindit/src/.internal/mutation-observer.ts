export type MutationType = 'childList' | 'attributes' | 'subtree';

export function bindItViaMutationObserver(
    targetElement: Element,
    config: { attributes?: true, childList?: true, subtree?: true }
): void {

    const onMutation = (mutation: MutationRecord): void => {
        if (mutation.type === 'childList') {
            console.log("Child nodes updated");
        } else if (mutation.type === "attributes") {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    };
    const callback = (mutationList: MutationRecord[]) => mutationList.forEach(onMutation);

    const observer = new MutationObserver(callback);

    observer.observe(targetElement, config);

    //TODO: Clean up subscription - observer.disconnect();
};


export default bindItViaMutationObserver;