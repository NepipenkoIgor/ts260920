function sleep(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function* getItemsReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<any> {
    for (const item of items) {
        await sleep(500);
        yield item;
    }
}

export default async function speakRealSloth(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}

