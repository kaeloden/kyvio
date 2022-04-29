$(document).ready(function () {

    // Data Template
    var pricingHeaderFooter = [
        { plan: 'Basic', price: '297', class: 'btn-primary' },
        { plan: 'Business', price: '697', class: 'btn-secondary text-white' },
        { plan: 'Pro', price: '997', class: 'btn-tertiary text-white' },
    ];

    var pricingContent = [
        {
            0: 'general', 1: 'yes', 2: 'yes', 3: 'yes',
            items: [
                ['number of sites', 1, 5, 15],
                ['media manager', 'yes', 'yes', 'yes'],
                ['3rd party integrations', 'yes', 'yes', 'yes'],
                ['team members', 0, 3, 10],
                ["'powered by' logo", 'yes', 'yes', 'yes'],
            ]
        },
        {
            0: 'funnel builder', 1: 'yes', 2: 'yes', 3: 'yes',
            items: [
                ['number of funnels', 10, 100, 500],
                ['number of templates groups', 5, 15, 99999],
                ['media manager', 'no', 'yes', 'yes'],
                ['mobile optimizer', 'yes', 'yes', 'yes'],
                ['in-built conversion tools', 'yes', 'yes', 'yes'],
                ['html download', 'no', 'yes', 'yes'],
                ['save as template', 'no', 'yes', 'yes'],
                ['clone page', 'yes', 'yes', 'yes'],
                ['Unique visitors', 25000, 100000, 'Unlimited'],
                ['Transfer Funnels', 'no', 'no', 'yes'],
            ]
        },
        {
            0: 'product builder', 1: 'yes', 2: 'yes', 3: 'yes',
            items: [
                ['number of products', 10, 50, 250],
                ['Membership Module products', 'yes', 'yes', 'yes'],
                ['Digital Products', 'yes', 'yes', 'yes'],
                ['Instasuite Checkout <br> (Stripe & Paypal)', 'yes', 'yes', 'yes'],
                ['multiple price points', 'yes', 'yes', 'yes'],
                ['coupons and discounts', 'no', 'yes', 'yes'],
                ['automation actions', 'no', 'yes', 'yes'],
                ['Digital product delivery - Email', 'yes', 'yes', 'yes'],
                ['Digital product delivery - Redirect UR', 'yes', 'yes', 'yes'],
                ['Digital product delivery - Upload File', 'no', 'yes', 'yes'],
                ['Digital product delivery - ISPDN', 'no', 'yes', 'yes'],
                ['Export orders to csv', 'yes', 'yes', 'yes'],
            ]
        },
        {
            0: 'membership builder', 1: 'yes', 2: 'yes', 3: 'yes',
            items: [
                ['in-built SMTP', 'yes', 'yes', 'yes'],
                ['number of themes', 1, 3, 5],
                ['number of members', 1000, 5000, 100, 000],
                ['member tags', 'no', 'yes', 'yes'],
                ['drip-feed', 'no', 'yes', 'yes'],
                ['member progress tracking', 'yes', 'yes', 'yes'],
                ['quiz tracking', 'yes', 'yes', 'yes'],
                ['design editor', 'yes', 'yes', 'yes'],
            ]
        },
        {
            0: 'list builder', 1: 'yes', 2: 'yes', 3: 'yes',
            items: [
                ['SMTP setup', 'own', 'own', 'own'],
                ['Blacklist domain, email, IP', 'yes', 'yes', 'yes'],
                ['Block role-based email', 'yes', 'yes', 'yes'],
                ['number of lists', 10, 100, 'unlimited'],
                ['number of subscripber', 1000, 5000, 100000],
                ['Manual/Bulk Import', 'no', 'yes', 'yes'],
                ['List segmentation', 'no', 'yes', 'yes'],
                ['Automations', 'yes', 'yes', 'yes'],
                ['Optin forms', 'yes', 'yes', 'yes'],
                ['Broadcasts', 'yes', 'yes', 'yes'],
                ['Sequences', 'yes', 'yes', 'yes'],
                ['Save email templates', 'yes', 'yes', 'yes'],
            ]
        },
        {
            0: 'blog builder', 1: 'yes', 2: 'yes', 3: 'yes',
            items: [
                ['Widgets', 'yes', 'yes', 'yes'],
                ['Menu', 'yes', 'yes', 'yes'],
                ['Theme customization', 'yes', 'yes', 'yes'],
                ['number of themes', 1, 3, 3],
                ['number of posts', 'unlimited', 'unlimited', 'unlimited'],
                ['Post categories', 'yes', 'yes', 'yes'],
            ]
        },
        {
            0: 'affiliate center', 1: 'no', 2: 'yes', 3: 'yes',
            items: [
                ['In-built SMTP', '', 'yes', 'yes'],
                ['Promotion Tools', '', 'yes', 'yes'],
                ['Manage Commissions', '', 'yes', 'yes'],
                ['number of affiliates', '', 1000, 5000],
                ['number of themes', '', 1, 1],
                ['Theme customization', '', 'yes', 'yes'],
            ]
        },
        {
            0: 'support desk', 1: 'no', 2: 'yes', 3: 'yes',
            items: [
                ['number of staff', '', 'yes', 'yes'],
                ['in-built SMTP', '', 3, 10],
                ['number of canned responses', '', 'yes', 'yes'],
                ['knowledgebase', '', 'yes', 'yes'],
                ['number of themes', '', 1, 1],
            ]
        },
    ];

    var headerContent = '';
    pricingHeaderFooter.forEach((v, i) => {
        headerContent += `
        <td class='position-relative p-0'width="25%">

        ${v.plan == 'Business' ? `<div class='bg-secondary fw-bold text-white w-100' style='position:absolute;top:-25px; '>BEST VALUE</div>` : ''}

        <div class="p-4">
            <h4>${v.plan}</h4> 
        <h1 class="text-muted">$${v.price}</h1>
        <p class="small text-muted">billed yearly</p>
        <button class="btn text-nowrap ${v.class} fw-bold w-100 mt-3">Buy ${v.plan}</button>
        </div>
        </td>`;
    });

    $('#pricingContent>tbody').append(`<tr><td></td>${headerContent}</tr>`);

    pricingContent.forEach((v, i) => {
        let rowContent = `<tr class='text-capitalize fw-bold bg-light border-bottom align-middle'>
        <td class='text-start text-nowrap'> <button class="btn toggleContent" data-parent-id='${i}'> <i class='${i == 0 ? 'fas fa-angle-up' : 'fas fa-angle-down'} text-muted' data-status='${i == 0 ? 'true' : 'false'}' ></i> </button> ${v[0]}  <i class='text-secondary far fa-question-circle'></i> </td>
        <td>${v[1]}</td>
        <td>${v[2]}</td>
        <td>${v[3]}</td>
        </tr>`;

        v.items.forEach(v2 => {
            rowContent += `<tr class='rowContent' data-child-id='${i}' style='${i == 0 ? '' : 'display:none'}'>
            <td class='text-start text-capitalize'>
                <div class='ms-5'>${checkValue(v2[0])}</div>
            </td>
            <td>${checkValue(v2[1])}</td>
            <td>${checkValue(v2[2])}</td>
            <td>${checkValue(v2[3])}</td>
            </tr>`;
        });

        $('#pricingContent>tbody').append(rowContent);

    });

    var footerContent = '';
    pricingHeaderFooter.forEach((v, i) => {
        footerContent += `<td class="p-4" width="25%">
        <button class="btn ${v.class} fw-bold w-100 ">Buy ${v.plan}</button>
        </td>`;
    });

    $('#pricingContent>tbody').append(`<tr><td></td>${footerContent}</tr>`);



    // Render Template
    function checkValue(val = '') {
        if (val == 'yes') {
            val = "<i class='fas fa-check text-secondary'></i>";
        } else if (val == 'no') {
            val = "<i class='fas fa-times text-red'></i>";
        }
        return val;
    }

    // Functionalities
    $(document).on('click', '.toggleContent', function () {
        let status = $(this).find('i').data('status');
        if (status) {
            $(this).find('i').attr('class', 'fas fa-angle-down text-muted');
            $(this).find('i').data('status', false);
        } else {

            $(this).find('i').attr('class', 'fas fa-angle-up text-muted');
            $(this).find('i').data('status', true);
        }
        $(`.rowContent[data-child-id="${$(this).data('parent-id')}"]`).toggle();
    });
});