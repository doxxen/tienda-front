<template>
    <div>
        <div class="customer-sidebar card border-0"> 
            <div class="customer-profile"><a class="d-inline-block" href="#"><img class="img-fluid rounded-circle customer-image shadow" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-589739-unsplash-avatar.jpg" alt=""></a>
                <h5>Julie Trnka</h5>
                <p class="text-muted text-sm mb-0">Ostrava, Czech Republic</p>
            </div>
            <nav class="list-group customer-nav">
                <a class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="customer-orders.html"><span>
                    <svg class="svg-icon svg-icon-heavy me-2">
                    <use xlink:href="#paper-bag-1"> </use>
                    </svg>Orders</span>
                    <div class="badge rounded-pill bg-dark fw-normal px-3">5</div>
                </a>
                <router-link class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" active-class="active" to="/cuenta/venta"><span>
                    <svg class="svg-icon svg-icon-heavy me-2">
                    <use xlink:href="#male-user-1"> </use>
                    </svg>Ventas</span>
                </router-link>
                <router-link to="/cuenta/direcciones" active-class="active" class="list-group-item d-flex justify-content-between align-items-center text-decoration-none"><span>
                    <svg class="svg-icon svg-icon-heavy me-2">
                    <use xlink:href="#navigation-map-1"> </use>
                    </svg>Direcciones</span>
                </router-link>
                <a class="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="customer-login.html"><span>
                    <svg class="svg-icon svg-icon-heavy me-2">
                    <use xlink:href="#exit-1"> </use>
                    </svg>Log out</span>
                </a>
            </nav>
        </div>
    </div>
</template>
<script>

export default{
    name: 'SidebarCliente'
}
</script>