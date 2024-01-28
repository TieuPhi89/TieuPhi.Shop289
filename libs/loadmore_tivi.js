document.addEventListener('DOMContentLoaded', function () {
    const tiviListElement = document.getElementById('thTivi_LoadMore');
    const loadMoreButton = document.getElementById('loadMoreBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');
    let currentPage = 1;
    const itemsPerPage = 4;
    let dsTivi = [];

    function renderItems(startIndex, endIndex) {
        dsTivi.slice(startIndex, endIndex).forEach((tiviItem) => {
            tiviListElement.innerHTML +=
                `<div class="col-6 col-md-4 col-xl-3 mb-4">
                    <div class="card text-center img-holder h-100">
                        <img class="card-img-top" src="${urlImages}/${tiviItem.Ma_so}.png" alt="">
                        <div class="card-body">
                            <h4 class="card-title">${tiviItem.Ten} </h4>
                            <p class="card-text text-danger">${tiviItem.Don_gia_Ban.toLocaleString()}<sup>đ</sup> </p>
                        </div>
                        <div class="card-footer">
                            <a href="javascript:void(0)" onclick="showModal(this)" class="btn btn-sm btn-outline-info">
                                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                            </a>
                            <a href="javascript:void(0)" onclick="addToCart('${tiviItem.Ma_so}', 1)" class="btn btn-sm btn-outline-danger">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
            
        });
    }

    function showLoading() {
        loadMoreButton.style.display = 'none';
        loadingIndicator.style.display = 'block';

        setTimeout(function () {
            loadingIndicator.style.display = 'none';
            loadMoreButton.style.display = 'none';
            loadMoreButton.style.margin = '0 auto';
            // loadMoreButton.removeAttribute('style'); // Xóa thuộc tính style
            loadMoreButton.style.width = '92.41px';
        }, 1000);
    }

    function loadDataAndRender() {
        getAPI("dsTivi").then((result) => {
            dsTivi = result;
            // renderItems(4, itemsPerPage + 4); // Bắt đầu từ vị trí index 4 và lấy 4 phần tử
        }).catch((error) => {
            console.error("Error loading data:", error);
        });
    }

    loadDataAndRender();

    loadMoreButton.addEventListener('click', function () {
        const start = currentPage * itemsPerPage; // Bắt đầu từ vị trí index 4 của lần tiếp theo
        const end = start + itemsPerPage;

        if (end >= dsTivi.length) {
            showLoading();
            setTimeout(function () {
                renderItems(start, dsTivi.length);
                loadMoreButton.style.display = 'none';
                // // Xóa class mới thêm vào
                // loadMoreButton.classList.remove('text-center'); // Xóa class mới thêm vào

                // // Xóa class mới thêm vào
                // loadMoreButton.classList.remove('centered');
            }, 1200);
        } else {
            showLoading();
            setTimeout(function () {
                renderItems(start, end);
                currentPage++;
                loadMoreButton.style.display = 'block';
                // // Thêm class mới để giữ lại hiệu ứng trung tâm
                // loadMoreButton.classList.add('text-center');

                // // Thêm class mới để giữ lại hiệu ứng trung tâm
                // loadMoreButton.classList.add('centered');
            }, 1200);
        }
    });
});
