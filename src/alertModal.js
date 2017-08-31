((win) => {
    win.alertModal = (obj) => {

        let idIndex = document.querySelector(".alertView") === null ? 0 : document.querySelector(".alertView").length,
            id = 'alertView_modal_id_' + idIndex,
            warning = obj.status == 'success' ?
            `<div class="alertView_success icon-check_alt"></div>` :
            `<div class="alertView_fail icon-x_alt"></div>`,
            view = `<div class="alertView_group">   
                        <div class="alertView_warp">
                            <div class="alertView">
                                <div class="alertView_close icon-x"></div>
                                ${!!warning && warning}
                                <div class="alertView_content">${obj.msg}</div>
                            </div>
                        </div>
                    </div>`;

        //插入弹框
        let content = document.createElement("div");
        content.id = id;
        content.innerHTML = view;
        document.getElementsByTagName('body')[0].appendChild(content);
        //获取弹框
        let domId = document.getElementById(id);
        //关闭弹框
        let close = () => {
            fadeOut(domId, obj.time || 2000, function() {
                if (domId.parentNode !== null) {
                    document.querySelector(`#${id} .alertView_close`).removeEventListener("click", () => {
                        close();
                    });
                    domId.parentNode.removeChild(domId);
                }
            });
        };

        document.querySelector(`#${id} .alertView_close`).addEventListener("click", () => {
            close();
        });

        setTimeout(() => {
            close()
        }, obj.time || 2000);

        //淡出效果
        function fadeOut(el, time, callback) {
            el.childNodes[0].style.transition = `opacity ${time/1000}s `;
            el.childNodes[0].style.opacity = 0;
            setTimeout(callback, time - 10)
        }
    };
})(window);