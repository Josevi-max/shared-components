import { LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tableStyles from './table.scss?inline';
import { tableTemplate } from './table.template';
import { TableColumn } from './table.model';

@customElement('wc-table')
export class WcTable extends LitElement {
    static override styles = css`${unsafeCSS(tableStyles)}`;

    @property({ type: Array })
    declare data: any[];

    @property({ type: Array })
    declare columns: TableColumn[];

    override render() {
        return tableTemplate(this);
    }

    public emitRowClick(row: any) {
        this.dispatchEvent(
            new CustomEvent('row-click', {
                detail: row,
                bubbles: true,
                composed: true,
            })
        );
    }

}
