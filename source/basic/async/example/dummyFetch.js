/**
 * 100ミリ秒未満のランダムなライミングでレスポンスを擬似的なデータ取得関数
 * 指定した`path`にデータがあるなら`callback(null, レスポンス)`を呼ぶ
 * データがない場合はNOT FOUNDとなり`callback(エラー)`を呼ぶ
 */
function dummyFetch(path, callback) {
    setTimeout(() => {
        // /success を含むパスにはリソースがあるという設定
        if (path.startsWith("/success")) {
            callback(null, { body: `Response body of ${path}` });
        } else {
            callback(new Error("NOT FOUND"));
        }
    }, 100 * Math.random());
}

dummyFetch("/success/data", (error, response) => {
    console.log(error, response);
});

dummyFetch("/failure/data", (error, response) => {
    console.log(error, response);
});

// nest
dummyFetch("/success/data", (error, response) => {
    console.log(error, response);
    // nest
    dummyFetch("/failure/data", (error, response) => {
        console.log(error, response);
    });

});
