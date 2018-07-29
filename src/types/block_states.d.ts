// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface BlockStates {
    _id:                string;
    block_id:           string;
    block_header_state: BlockHeaderState;
    block_num:          number;
    createdAt:          string;
    in_current_chain:   boolean;
    validated:          boolean;
}

export interface BlockHeaderState {
    id:                                  string;
    block_num:                           number;
    header:                              Header;
    dpos_proposed_irreversible_blocknum: number;
    dpos_irreversible_blocknum:          number;
    bft_irreversible_blocknum:           number;
    pending_schedule_lib_num:            number;
    pending_schedule_hash:               string;
    pending_schedule:                    Schedule;
    active_schedule:                     Schedule;
    blockroot_merkle:                    BlockrootMerkle;
    producer_to_last_produced:           Array<Array<number | string>>;
    producer_to_last_implied_irb:        Array<Array<number | string>>;
    block_signing_key:                   string;
    confirm_count:                       any[];
    confirmations:                       any[];
}

export interface Schedule {
    version:   number;
    producers: Producer[];
}

export interface Producer {
    producer_name:     string;
    block_signing_key: string;
}

export interface BlockrootMerkle {
    _active_nodes: string[];
    _node_count:   number;
}

export interface Header {
    timestamp:          string;
    producer:           string;
    confirmed:          number;
    previous:           string;
    transaction_mroot:  string;
    action_mroot:       string;
    schedule_version:   number;
    header_extensions:  any[];
    producer_signature: string;
}