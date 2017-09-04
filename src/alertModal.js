const alertModal = (options) => {
    let settings = {
            status: 'success',
            msg: '',
            time: 2000,
            autoClose: true,
            delayTime: 2000
        },
        idIndex = document.querySelector(".alertView") === null ? 0 : document.querySelector(".alertView").length,
        id = 'alertView_modal_id_' + idIndex,
        warning = '';


    let hasOwnProperty = Object.prototype.hasOwnProperty;

    settings = assign(settings, options);

    if (settings.status == 'success') {
        warning = `<div class="alertView_success icon-check_alt"></div>`
    } else if (settings.status == 'fail') {
        warning = `<div class="alertView_fail icon-x_alt"></div>`
    } else {
        warning = `<div class="alertView_custom ${settings.status}"></div>`
    }

    let view = `<div class="alertView_group">   
                    <div class="alertView_warp">
                        <div class="alertView">
                            <div class="alertView_close icon-x"></div>
                            ${!!warning && warning}
                            <div class="alertView_content">${settings.msg}</div>
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
        fadeOut(domId, settings.time || 2000, function() {
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

    if (settings.autoClose) {
        setTimeout(() => {
            close()
        }, settings.delayTime || 2000);
    }


    //淡出效果
    function fadeOut(el, time, callback) {
        el.childNodes[0].style.transition = `opacity ${time/1000}s `;
        el.childNodes[0].style.opacity = 0;
        setTimeout(callback, time - 10)
    }

    //对象拷贝
    function assign(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    }
};

export default alertModal;