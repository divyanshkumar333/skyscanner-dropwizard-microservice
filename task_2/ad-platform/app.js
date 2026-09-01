// ==========================================================================
// Skyscanner Ad Platform Interactive Prototype Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. Navigation Tab Switching
    // --------------------------------------------------------------------------
    const navTabs = document.querySelectorAll('.nav-tab');
    const pageViews = document.querySelectorAll('.page-view');

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetViewId = tab.getAttribute('data-view');
            
            // Update Tab Active State
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Switch Active Page View
            pageViews.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetViewId) {
                    view.classList.add('active');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // --------------------------------------------------------------------------
    // 2. Ad Type Selection Cards (Component Set)
    // --------------------------------------------------------------------------
    const adTypeCards = document.querySelectorAll('.ad-type-card');
    const previewSpecFormat = document.getElementById('previewSpecFormat');
    const mockupMediaContainer = document.getElementById('mockupMediaContainer');

    adTypeCards.forEach(card => {
        card.addEventListener('click', () => {
            adTypeCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            const adType = card.getAttribute('data-type');
            updateAdPreviewFormat(adType);
        });
    });

    function updateAdPreviewFormat(type) {
        if (!previewSpecFormat || !mockupMediaContainer) return;

        if (type === 'text') {
            previewSpecFormat.textContent = 'Text Only';
            mockupMediaContainer.style.display = 'none';
        } else if (type === 'image-text') {
            previewSpecFormat.textContent = 'Image & Text';
            mockupMediaContainer.style.display = 'flex';
            mockupMediaContainer.innerHTML = `
                <div class="mockup-image-placeholder">
                    <div class="placeholder-scenery">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        <span>Hoen Island Discovery Visual</span>
                    </div>
                </div>`;
            mockupMediaContainer.style.background = 'linear-gradient(135deg, #0770E3, #00A698)';
        } else if (type === 'video') {
            previewSpecFormat.textContent = 'Video Ad (16:9)';
            mockupMediaContainer.style.display = 'flex';
            mockupMediaContainer.innerHTML = `
                <div class="mockup-image-placeholder">
                    <div class="placeholder-scenery">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        <span>Autoplay Video (1080p HD)</span>
                    </div>
                </div>`;
            mockupMediaContainer.style.background = 'linear-gradient(135deg, #FF7B59, #7047EB)';
        }
    }

    // --------------------------------------------------------------------------
    // 3. Live Form Synchronization with Preview Card
    // --------------------------------------------------------------------------
    const adTitleInput = document.getElementById('adTitle');
    const adDescInput = document.getElementById('adDescription');
    const targetAudienceSelect = document.getElementById('targetAudience');
    const ctaLabelSelect = document.getElementById('ctaLabel');
    const budgetInput = document.getElementById('budgetInput');
    const estReachEl = document.getElementById('estReach');

    const previewTitle = document.getElementById('previewTitle');
    const previewDesc = document.getElementById('previewDesc');
    const previewCtaBtn = document.getElementById('previewCtaBtn');
    const previewSpecTarget = document.getElementById('previewSpecTarget');

    if (adTitleInput && previewTitle) {
        adTitleInput.addEventListener('input', (e) => {
            previewTitle.textContent = e.target.value || 'Your Ad Headline Here';
        });
    }

    if (adDescInput && previewDesc) {
        adDescInput.addEventListener('input', (e) => {
            previewDesc.textContent = e.target.value || 'Your ad description copy will appear here...';
        });
    }

    if (ctaLabelSelect && previewCtaBtn) {
        ctaLabelSelect.addEventListener('change', (e) => {
            previewCtaBtn.textContent = e.target.value;
        });
    }

    if (targetAudienceSelect && previewSpecTarget) {
        targetAudienceSelect.addEventListener('change', (e) => {
            const selectedText = targetAudienceSelect.options[targetAudienceSelect.selectedIndex].text;
            previewSpecTarget.textContent = selectedText.split(' ')[0];
        });
    }

    if (budgetInput && estReachEl) {
        budgetInput.addEventListener('input', (e) => {
            const budget = parseFloat(e.target.value) || 0;
            const minReach = Math.round(budget * 230).toLocaleString();
            const maxReach = Math.round(budget * 340).toLocaleString();
            estReachEl.textContent = `${minReach} - ${maxReach}`;
        });
    }

    // Form Submission & Draft Handlers
    const adCreationForm = document.getElementById('adCreationForm');
    const btnDraft = document.getElementById('btnDraft');
    const btnPublishTop = document.getElementById('btnPublishTop');

    if (adCreationForm) {
        adCreationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('🎉 Campaign successfully created and queued for review!');
            // Switch to Analytics tab after 1.5 seconds
            setTimeout(() => {
                const analyticsTab = document.querySelector('[data-view="view-analytics"]');
                if (analyticsTab) analyticsTab.click();
            }, 1200);
        });
    }

    if (btnDraft) {
        btnDraft.addEventListener('click', () => {
            showToast('💾 Draft campaign saved to your partner drafts.');
        });
    }

    if (btnPublishTop && adCreationForm) {
        btnPublishTop.addEventListener('click', () => {
            adCreationForm.requestSubmit();
        });
    }

    // --------------------------------------------------------------------------
    // 4. Analytics Dashboard Interactivity
    // --------------------------------------------------------------------------
    const analyticsDateRange = document.getElementById('analyticsDateRange');
    const btnExportData = document.getElementById('btnExportData');
    const btnRefreshAnalytics = document.getElementById('btnRefreshAnalytics');
    const tableSearch = document.getElementById('tableSearch');
    const tableStatusFilter = document.getElementById('tableStatusFilter');

    if (analyticsDateRange) {
        analyticsDateRange.addEventListener('change', (e) => {
            const period = e.target.value;
            updateMetricsForPeriod(period);
            showToast(`📊 Metrics updated for: ${analyticsDateRange.options[analyticsDateRange.selectedIndex].text}`);
        });
    }

    function updateMetricsForPeriod(period) {
        const kpiImpressions = document.getElementById('kpiImpressions');
        const kpiClicks = document.getElementById('kpiClicks');
        const kpiSpend = document.getElementById('kpiSpend');
        const kpiConversions = document.getElementById('kpiConversions');

        if (period === '7d') {
            if (kpiImpressions) kpiImpressions.textContent = '312,400';
            if (kpiClicks) kpiClicks.textContent = '17,890';
            if (kpiSpend) kpiSpend.textContent = '$3,150.00';
            if (kpiConversions) kpiConversions.innerHTML = '840 <span class="roas-pill green">4.8x ROAS</span>';
        } else if (period === '30d') {
            if (kpiImpressions) kpiImpressions.textContent = '1,248,500';
            if (kpiClicks) kpiClicks.textContent = '68,420';
            if (kpiSpend) kpiSpend.textContent = '$12,350.00';
            if (kpiConversions) kpiConversions.innerHTML = '3,180 <span class="roas-pill green">4.2x ROAS</span>';
        } else if (period === '90d' || period === 'ytd') {
            if (kpiImpressions) kpiImpressions.textContent = '3,840,000';
            if (kpiClicks) kpiClicks.textContent = '214,300';
            if (kpiSpend) kpiSpend.textContent = '$38,700.00';
            if (kpiConversions) kpiConversions.innerHTML = '9,940 <span class="roas-pill green">4.4x ROAS</span>';
        }
    }

    if (btnExportData) {
        btnExportData.addEventListener('click', () => {
            showToast('📥 Exporting campaign telemetry to CSV format...');
        });
    }

    if (btnRefreshAnalytics) {
        btnRefreshAnalytics.addEventListener('click', () => {
            btnRefreshAnalytics.style.opacity = '0.7';
            setTimeout(() => {
                btnRefreshAnalytics.style.opacity = '1';
                showToast('🔄 Real-time telemetry synchronized with Skyscanner ad server.');
            }, 600);
        });
    }

    // Filter Table Search & Status
    if (tableSearch) {
        tableSearch.addEventListener('input', filterTable);
    }
    if (tableStatusFilter) {
        tableStatusFilter.addEventListener('change', filterTable);
    }

    function filterTable() {
        const query = tableSearch ? tableSearch.value.toLowerCase() : '';
        const status = tableStatusFilter ? tableStatusFilter.value.toLowerCase() : 'all';
        const rows = document.querySelectorAll('#campaignsTable tbody tr');

        rows.forEach(row => {
            const campaignName = row.querySelector('.campaign-cell').textContent.toLowerCase();
            const statusBadge = row.querySelector('.status-badge').textContent.toLowerCase();

            const matchesQuery = campaignName.includes(query);
            const matchesStatus = (status === 'all') || (statusBadge === status);

            if (matchesQuery && matchesStatus) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // --------------------------------------------------------------------------
    // 5. User Feedback Survey Logic
    // --------------------------------------------------------------------------
    const q2Text = document.getElementById('q2Text');
    const q2CharCount = document.getElementById('q2CharCount');
    const feedbackSurveyForm = document.getElementById('feedbackSurveyForm');
    const surveySuccessState = document.getElementById('surveySuccessState');
    const surveyProgressBar = document.getElementById('surveyProgressBar');
    const surveyStepText = document.getElementById('surveyStepText');
    const btnSkipSurvey = document.getElementById('btnSkipSurvey');
    const btnReturnToDash = document.getElementById('btnReturnToDash');

    if (q2Text && q2CharCount) {
        q2Text.addEventListener('input', () => {
            q2CharCount.textContent = q2Text.value.length;
            updateSurveyProgress();
        });
    }

    // Update progress bar on question interactions
    const surveyInputs = document.querySelectorAll('#feedbackSurveyForm input, #feedbackSurveyForm textarea');
    surveyInputs.forEach(input => {
        input.addEventListener('change', updateSurveyProgress);
    });

    function updateSurveyProgress() {
        let answered = 0;
        if (document.querySelector('input[name="easeOfCreation"]:checked')) answered++;
        if (q2Text && q2Text.value.trim().length > 0) answered++;
        if (document.querySelector('input[name="analyticsSatisfaction"]:checked')) answered++;
        if (document.querySelectorAll('input[name="challenges"]:checked').length > 0) answered++;
        if (document.querySelector('input[name="recommend"]:checked')) answered++;

        const percentage = Math.max(20, Math.round((answered / 5) * 100));
        if (surveyProgressBar) surveyProgressBar.style.width = `${percentage}%`;
        if (surveyStepText) surveyStepText.textContent = `${answered} of 5 answered (${percentage}%)`;
    }

    if (feedbackSurveyForm) {
        feedbackSurveyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            feedbackSurveyForm.style.display = 'none';
            if (surveySuccessState) surveySuccessState.style.display = 'block';
            if (surveyProgressBar) surveyProgressBar.style.width = '100%';
            if (surveyStepText) surveyStepText.textContent = 'Completed (100%)';
            showToast('✨ Thank you! Your feedback has been recorded.');
        });
    }

    if (btnSkipSurvey) {
        btnSkipSurvey.addEventListener('click', () => {
            const analyticsTab = document.querySelector('[data-view="view-analytics"]');
            if (analyticsTab) analyticsTab.click();
            showToast('Survey skipped. You can provide feedback anytime.');
        });
    }

    if (btnReturnToDash) {
        btnReturnToDash.addEventListener('click', () => {
            const analyticsTab = document.querySelector('[data-view="view-analytics"]');
            if (analyticsTab) analyticsTab.click();
        });
    }

    // --------------------------------------------------------------------------
    // Toast Notification Helper
    // --------------------------------------------------------------------------
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    let toastTimeout;

    function showToast(message) {
        if (!toast || !toastMessage) return;
        toastMessage.textContent = message;
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }
});
